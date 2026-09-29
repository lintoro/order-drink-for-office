import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScreenA_Create from './components/ScreenA_Create';
import ScreenB_UserOrder from './components/ScreenB_UserOrder';
import ScreenC_Admin from './components/ScreenC_Admin';
import { getGroupOrder, saveGroupOrder } from './utils/storage';
import { subscribeToGroup, syncSaveGroup, syncUpdateGroup, isCloudModeEnabled } from './services/syncService';
import { DEFAULT_STORES } from './data/defaultStores';
import { generateAdminToken } from './utils/calc';

// 若首次開啟無任何資料，初始化一組得正示範資料
function getInitialGroup() {
  const saved = getGroupOrder();
  if (saved) return saved;

  const defaultStore = DEFAULT_STORES[0]; // 得正
  const adminToken = generateAdminToken();
  const orderId = 'demo_group_001';

  const baseUrl = `${window.location.origin}${window.location.pathname}`;
  const initial = {
    orderId,
    adminToken,
    storeName: defaultStore.name,
    deadline: '12:30',
    deliveryFee: 40,
    categories: defaultStore.categories,
    toppings: defaultStore.toppings,
    status: 'open', // open | locked | arrived
    createdAt: new Date().toISOString(),
    publicUrl: `${baseUrl}?order=${orderId}`,
    adminUrl: `${baseUrl}?order=${orderId}&token=${adminToken}`,
    orders: [
      {
        id: 'ord_sample_1',
        userName: '王小美',
        items: [
          {
            itemName: '焙烏龍鮮奶',
            size: '大杯',
            price: 65,
            sugar: '半糖 5分',
            ice: '微冰',
            toppings: [{ name: '黃金珍珠', price: 10 }],
            note: '自備環保杯',
          },
        ],
        isPaid: true,
        isPicked: true,
      },
      {
        id: 'ord_sample_2',
        userName: '張阿明',
        items: [
          {
            itemName: '春烏龍',
            size: '中杯',
            price: 30,
            sugar: '無糖',
            ice: '去冰',
            toppings: [],
            note: '',
          },
        ],
        isPaid: false,
        isPicked: false,
      },
    ],
  };

  saveGroupOrder(initial);
  return initial;
}

export default function App() {
  // 解析 URL 查詢參數 (?order=...&token=...)
  const searchParams = new URLSearchParams(window.location.search);
  const urlOrderId = searchParams.get('order');
  const urlToken = searchParams.get('token');

  // 初始視圖判定
  const initialView = urlToken ? 'admin' : urlOrderId ? 'order' : 'order';
  const [currentView, setCurrentView] = useState(initialView);
  const [groupData, setGroupData] = useState(getInitialGroup);
  const [syncStatusText, setSyncStatusText] = useState('');

  // 本機儲存之主揪 token 記憶
  const localAdminToken = groupData?.adminToken;
  const isUserTheAdmin =
    (urlToken && urlToken === groupData?.adminToken) ||
    (!urlToken && localAdminToken === groupData?.adminToken);

  // 訂閱資料同步 (Firebase 雲端 或 本機跨分頁)
  useEffect(() => {
    const targetOrderId = urlOrderId || groupData?.orderId;
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
    // 開團後導至管理頁或點單頁
    setCurrentView('admin');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans pb-12">
      {/* 頂部導覽 */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        groupData={groupData}
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
            onGoToAdmin={isUserTheAdmin ? () => setCurrentView('admin') : null}
          />
        )}

        {currentView === 'admin' && (
          <ScreenC_Admin
            groupData={groupData}
            onUpdateGroup={handleUpdateGroup}
            isAuthorized={isUserTheAdmin}
          />
        )}
      </main>
    </div>
  );
}
