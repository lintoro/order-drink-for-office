import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScreenA_Create from './components/ScreenA_Create';
import ScreenB_UserOrder from './components/ScreenB_UserOrder';
import ScreenC_Admin from './components/ScreenC_Admin';
import { getGroupOrder, saveGroupOrder, clearGroupOrder } from './utils/storage';
import { subscribeToGroup, syncSaveGroup, syncUpdateGroup, isCloudModeEnabled } from './services/syncService';
import { DEFAULT_STORES } from './data/defaultStores';
import { generateAdminToken } from './utils/calc';

// 取得乾淨的初始團購資料 (清除開發期 demo 示範假資料)
function getCleanInitialGroup() {
  const saved = getGroupOrder();
  // 若本機殘留開發期的 demo 假資料，自動予以清除
  if (
    saved &&
    (saved.orderId === 'demo_group_001' ||
      saved.orders?.some((o) => o.userName === '王小美' || o.userName === '張阿明'))
  ) {
    clearGroupOrder();
    return null;
  }
  return saved || null;
}

export default function App() {
  // 解析 URL 查詢參數 (?order=...&token=...)
  const searchParams = new URLSearchParams(window.location.search);
  const urlOrderId = searchParams.get('order');
  const urlToken = searchParams.get('token');

  const [groupData, setGroupData] = useState(getCleanInitialGroup);

  // 初始視圖智慧判定：
  // 1. 若有 token ➜ 主揪管理後台
  // 2. 若有 orderId ➜ 同事點餐
  // 3. 若無參數但本機已有團購 ➜ 同事點餐
  // 4. 若為乾淨新系統 (無團購) ➜ 預設為「主揪開團」
  const initialView = urlToken
    ? 'admin'
    : urlOrderId
    ? 'order'
    : groupData
    ? 'order'
    : 'create';

  const [currentView, setCurrentView] = useState(initialView);
  const [syncStatusText, setSyncStatusText] = useState('');

  // 一鍵重設系統（清除本機暫存團購）
  const handleResetSystem = () => {
    if (window.confirm('確定要清除當前團購資料，重設為全新的乾淨系統嗎？')) {
      clearGroupOrder();
      setGroupData(null);
      setCurrentView('create');
      window.history.replaceState({}, '', window.location.pathname);
    }
  };

  // 本機儲存之主揪 token 記憶
  const localAdminToken = groupData?.adminToken;
  const isUserTheAdmin =
    (urlToken && urlToken === groupData?.adminToken) ||
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
        setCurrentView={setCurrentView}
        groupData={groupData}
        onResetSystem={handleResetSystem}
      />

      {/* 狀態同步即時通知條 */}
      <div className="bg-slate-100/90 border-b border-slate-200 py-1 px-4 flex items-center justify-between text-[11px] text-slate-600">
        <div className="flex items-center gap-2">
          <span>模式：{isCloudModeEnabled() ? '🟢 Firebase 雲端即時連線' : '🟡 本機跨分頁即時同步'}</span>
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
        {currentView === 'create' && (
          <ScreenA_Create onGroupCreated={handleGroupCreated} />
        )}

        {currentView === 'order' && (
          <ScreenB_UserOrder
            groupData={groupData}
            onUpdateGroup={handleUpdateGroup}
            onGoToAdmin={(targetView = 'admin') => setCurrentView(targetView)}
          />
        )}

        {currentView === 'admin' && (
          <ScreenC_Admin
            groupData={groupData}
            onUpdateGroup={handleUpdateGroup}
            isAuthorized={isUserTheAdmin}
            onGoToCreate={() => setCurrentView('create')}
            onResetSystem={handleResetSystem}
          />
        )}
      </main>
    </div>
  );
}
