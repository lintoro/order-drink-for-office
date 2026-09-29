import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScreenPortal_Landing from './components/ScreenPortal_Landing';
import ScreenA_Create from './components/ScreenA_Create';
import ScreenB_UserOrder from './components/ScreenB_UserOrder';
import ScreenC_Admin from './components/ScreenC_Admin';
import Modal_HistoryArchives from './components/Modal_HistoryArchives';
import { getGroupOrder, saveGroupOrder, clearGroupOrder, archiveGroupOrder, getAdminToken } from './utils/storage';
import { subscribeToGroup, syncSaveGroup, syncUpdateGroup, isCloudModeEnabled } from './services/syncService';
import { DEFAULT_STORES } from './data/defaultStores';
import { generateAdminToken } from './utils/calc';

// 取得乾淨的初始團購資料 (依 targetOrderId 隔離，並清除 demo 示範假資料)
function getCleanInitialGroup(targetOrderId = null) {
  const saved = getGroupOrder(targetOrderId);
  // 若本機殘留開發期的 demo 假資料，自動予以清除
  if (
    saved &&
    (saved.orderId === 'demo_group_001' ||
      saved.orders?.some((o) => o.userName === '王小美' || o.userName === '張阿明'))
  ) {
    clearGroupOrder(saved.orderId);
    return null;
  }
  return saved || null;
}

export default function App() {
  // 解析 URL 查詢參數 (?order=...&token=...)
  const searchParams = new URLSearchParams(window.location.search);
  const urlOrderId = searchParams.get('order');
  const urlToken = searchParams.get('token');

  const [groupData, setGroupData] = useState(() => getCleanInitialGroup(urlOrderId));
  const [initialAdminName, setInitialAdminName] = useState('');
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  // 初始視圖智慧判定：
  // 1. 若有 token ➜ 主揪管理後台
  // 2. 若有 orderId ➜ 同事點餐
  // 3. 若無參數 ➜ 入口大廳 (Portal Landing，主揪/同事雙入口)
  const initialView = urlToken
    ? 'admin'
    : urlOrderId
    ? 'order'
    : 'portal';

  const [currentView, setCurrentView] = useState(initialView);
  const [syncStatusText, setSyncStatusText] = useState('');

  // 一鍵重設系統（清除本機暫存團購）
  const handleResetSystem = () => {
    if (window.confirm('確定要清除當前團購資料，重設為全新的乾淨系統嗎？')) {
      if (groupData?.orderId) {
        clearGroupOrder(groupData.orderId);
      } else {
        clearGroupOrder();
      }
      setGroupData(null);
      setCurrentView('portal');
      window.history.replaceState({}, '', window.location.pathname);
    }
  };

  // 結案歸檔此團 (需求 4)
  const handleArchiveGroup = (groupToArchive) => {
    archiveGroupOrder(groupToArchive);
    clearGroupOrder(groupToArchive.orderId);
    setGroupData(null);
    window.history.replaceState({}, '', window.location.pathname);
    setCurrentView('portal');
    alert(`🎉「${groupToArchive.storeName}」已成功結案歸檔！隨時可於歷史紀錄庫中查閱、匯出報帳 CSV 或再次開團。`);
  };

  // 從大廳發起開團 (需求 2)
  const handleStartCreate = (adminNickname) => {
    setInitialAdminName(adminNickname);
    window.history.pushState({}, '', window.location.pathname);
    setCurrentView('create');
  };

  // 從大廳加入點餐 (支援多團精準載入)
  const handleJoinOrder = (targetOrderId) => {
    window.history.pushState({}, '', `?order=${targetOrderId}`);
    const targetGroup = getGroupOrder(targetOrderId);
    if (targetGroup) {
      setGroupData(targetGroup);
    }
    setCurrentView('order');
  };

  // 回到大廳
  const handleGoToPortal = () => {
    window.history.pushState({}, '', window.location.pathname);
    setCurrentView('portal');
  };

  // 從歷史紀錄再次開團
  const handleRecreateFromHistory = (archivedGroup) => {
    setShowHistoryModal(false);
    setInitialAdminName(archivedGroup.adminName || '主揪');
    setCurrentView('create');
  };

  // 本機儲存之主揪 token 記憶 (支援多團主揪 Token 字典)
  const currentOrderId = urlOrderId || groupData?.orderId;
  const localAdminToken = groupData?.adminToken || (currentOrderId ? getAdminToken(currentOrderId) : null);
  const isUserTheAdmin =
    (urlToken && urlToken === groupData?.adminToken) ||
    (urlToken && urlToken === localAdminToken) ||
    (!urlToken && localAdminToken && localAdminToken === groupData?.adminToken);

  // 訂閱資料同步 (Firebase 雲端 或 本機跨分頁)
  useEffect(() => {
    const targetOrderId = urlOrderId || groupData?.orderId;
    if (!targetOrderId) return;

    const unsubscribe = subscribeToGroup(targetOrderId, (updatedData, mode) => {
      if (updatedData) {
        setGroupData(updatedData);
        setSyncStatusText(mode === 'cloud' ? '⚡ 雲端已即時同步' : '🔄 本地資料已更新');
        setTimeout(() => setSyncStatusText(''), 2000);
      }
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [urlOrderId, groupData?.orderId]);

  // 更新團購資料 (雙向寫入)
  const handleUpdateGroup = async (newGroup) => {
    setGroupData(newGroup);
    await syncUpdateGroup(newGroup.orderId, newGroup);
  };

  // 開團成功
  const handleGroupCreated = async (newGroup) => {
    setGroupData(newGroup);
    await syncSaveGroup(newGroup);
    // 開團後導至管理頁
    setCurrentView('admin');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans pb-12">
      {/* 頂部導覽 */}
      <Navbar
        currentView={currentView}
        setCurrentView={(view) => {
          if (view === 'portal') {
            handleGoToPortal();
          } else {
            setCurrentView(view);
          }
        }}
        groupData={groupData}
        onResetSystem={handleResetSystem}
        onOpenHistory={() => setShowHistoryModal(true)}
      />

      {/* 狀態同步即時通知條 */}
      <div className="bg-slate-100/90 border-b border-slate-200 py-1 px-4 flex items-center justify-between text-[11px] text-slate-600">
        <div className="flex items-center gap-2">
          <span>模式：{isCloudModeEnabled() ? '🟢 Cloudflare 雲端即時連線' : '🟡 本機跨分頁即時同步'}</span>
          {syncStatusText && (
            <span className="font-bold text-emerald-600 transition-all">{syncStatusText}</span>
          )}
        </div>
        <div>
          {isUserTheAdmin ? (
            <span className="text-amber-700 font-bold bg-amber-100/70 px-2 py-0.5 rounded-full">
              👑 您是本團主揪
            </span>
          ) : (
            <span className="text-slate-400">一般同仁身分</span>
          )}
        </div>
      </div>

      {/* 主畫面容器 */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-2 pt-4">
        {currentView === 'portal' && (
          <ScreenPortal_Landing
            groupData={groupData}
            onStartCreate={handleStartCreate}
            onJoinOrder={handleJoinOrder}
            onViewHistory={() => setShowHistoryModal(true)}
          />
        )}

        {currentView === 'create' && (
          <ScreenA_Create
            onGroupCreated={handleGroupCreated}
            initialAdminName={initialAdminName}
          />
        )}

        {currentView === 'order' &&
          (!groupData && urlOrderId ? (
            <div className="max-w-md mx-auto my-12 p-8 bg-white border border-slate-200 rounded-3xl shadow-sm text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto text-3xl animate-bounce">
                🥤
              </div>
              <h2 className="text-xl font-bold text-slate-800">正在連線載入飲料團購...</h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                正在為您從雲端同步主揪建立的菜單與點餐清單，請稍候片刻！
              </p>
            </div>
          ) : (
            <ScreenB_UserOrder
              groupData={groupData}
              onUpdateGroup={handleUpdateGroup}
              isAuthorized={isUserTheAdmin}
              onGoToAdmin={(targetView) => {
                const view = typeof targetView === 'string' ? targetView : 'admin';
                if (view === 'admin') {
                  const token =
                    groupData?.adminToken ||
                    (groupData?.orderId ? getAdminToken(groupData.orderId) : '');
                  if (token && groupData?.orderId) {
                    window.history.pushState(
                      {},
                      '',
                      `?order=${groupData.orderId}&token=${token}`
                    );
                  }
                }
                setCurrentView(view);
              }}
            />
          ))}

        {currentView === 'admin' && (
          <ScreenC_Admin
            groupData={groupData}
            onUpdateGroup={handleUpdateGroup}
            isAuthorized={isUserTheAdmin}
            onGoToCreate={() => setCurrentView('create')}
            onResetSystem={handleResetSystem}
            onArchiveGroup={handleArchiveGroup}
            onViewHistory={() => setShowHistoryModal(true)}
            onGoToOrder={() => {
              if (groupData?.orderId) {
                window.history.pushState({}, '', `?order=${groupData.orderId}`);
              }
              setCurrentView('order');
            }}
          />
        )}
      </main>

      {/* 📜 歷史結案歸檔紀錄彈窗 (需求 4) */}
      <Modal_HistoryArchives
        isOpen={showHistoryModal}
        onClose={() => setShowHistoryModal(false)}
        onRecreateFromHistory={handleRecreateFromHistory}
      />
    </div>
  );
}
