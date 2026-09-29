import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScreenA_Create from './components/ScreenA_Create';
import ScreenB_UserOrder from './components/ScreenB_UserOrder';
import ScreenC_Admin from './components/ScreenC_Admin';
import { getGroupOrder, saveGroupOrder } from './utils/storage';
import { DEFAULT_STORES } from './data/defaultStores';
import { generateAdminToken } from './utils/calc';

// 若首次開啟無資料，初始化一組體驗範例
function getInitialGroup() {
  const saved = getGroupOrder();
  if (saved) return saved;

  const defaultStore = DEFAULT_STORES[0]; // 得正
  const initial = {
    orderId: 'demo_group_001',
    adminToken: generateAdminToken(),
    storeName: defaultStore.name,
    deadline: '12:30',
    deliveryFee: 40,
    categories: defaultStore.categories,
    toppings: defaultStore.toppings,
    status: 'open', // open | locked | arrived
    createdAt: new Date().toISOString(),
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
  const [currentView, setCurrentView] = useState('order'); // 'create' | 'order' | 'admin'
  const [groupData, setGroupData] = useState(getInitialGroup);

  // 跨分頁與本地即時資料同步監聽
  useEffect(() => {
    const handleSync = () => {
      const latest = getGroupOrder();
      if (latest) {
        setGroupData(latest);
      }
    };

    window.addEventListener('storage', handleSync);
    window.addEventListener('drink_group_updated', handleSync);

    return () => {
      window.removeEventListener('storage', handleSync);
      window.removeEventListener('drink_group_updated', handleSync);
    };
  }, []);

  const handleUpdateGroup = (newGroup) => {
    setGroupData(newGroup);
    saveGroupOrder(newGroup);
  };

  const handleGroupCreated = (newGroup) => {
    setGroupData(newGroup);
    saveGroupOrder(newGroup);
    setCurrentView('order'); // 開團後跳至點餐頁預覽
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans pb-12">
      {/* 頂部快速導覽 */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        groupData={groupData}
      />

      {/* 提示橫幅 */}
      <div className="bg-emerald-50 border-b border-emerald-100 py-1.5 px-4 text-center text-[11px] text-emerald-800">
        💡 提示：您可隨時透過右上角切換<strong>「主揪開團」</strong>、<strong>「同事點餐」</strong>或<strong>「主揪管理」</strong>視圖，體驗無縫連動！
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
          />
        )}

        {currentView === 'admin' && (
          <ScreenC_Admin
            groupData={groupData}
            onUpdateGroup={handleUpdateGroup}
          />
        )}
      </main>
    </div>
  );
}
