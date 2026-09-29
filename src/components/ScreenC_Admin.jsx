import React, { useState } from 'react';
import {
  calculateDeliveryFee,
  calculateItemTotal,
  aggregateOrderSummary,
} from '../utils/calc';
import { isCloudModeEnabled } from '../services/syncService';
import {
  ShieldCheck,
  Clock,
  Copy,
  CheckCheck,
  Send,
  Lock,
  Unlock,
  Coins,
  CheckCircle2,
  AlertCircle,
  Truck,
  Radio,
  Share2,
  ExternalLink,
  Phone,
  PhoneCall,
  MapPin,
  CalendarCheck,
} from 'lucide-react';

export default function ScreenC_Admin({
  groupData,
  onUpdateGroup,
  isAuthorized = true,
  onGoToCreate,
  onResetSystem,
  onArchiveGroup,
  onViewHistory,
  onGoToOrder,
}) {
  const [copyMsg, setCopyMsg] = useState('');
  const [editingPhone, setEditingPhone] = useState(groupData?.phone || '');
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [showHostOrderModal, setShowHostOrderModal] = useState(false);

  // 主揪點餐彈窗 state (需求 2：主揪自己也能點/改飲料)
  const hostOrder = groupData?.orders?.find(
    (o) => o.userName.trim().toLowerCase() === (groupData.adminName || '主揪').trim().toLowerCase()
  );
  const [hostCat, setHostCat] = useState(groupData?.categories?.[0]?.name || '');
  const [hostItem, setHostItem] = useState(groupData?.categories?.[0]?.items?.[0]?.name || '');
  const [hostSize, setHostSize] = useState('大杯');
  const [hostSugar, setHostSugar] = useState('微糖 3分');
  const [hostIce, setHostIce] = useState('微冰');
  const [hostToppings, setHostToppings] = useState([]);
  const [hostNote, setHostNote] = useState('');

  const isCloud = isCloudModeEnabled();

  if (!groupData) {
    return (
      <div className="max-w-md mx-auto my-12 p-8 bg-white border border-slate-200 rounded-3xl shadow-sm text-center space-y-4">
        <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto text-3xl">
          👑
        </div>
        <h2 className="text-xl font-bold text-slate-800">目前尚無進行中的團購</h2>
        <p className="text-sm text-slate-500 leading-relaxed">
          您目前尚未發起飲料團。立即建立新團購，即可開始在辦公室揪團統計與管理！
        </p>
        <div className="flex flex-col gap-2 pt-2">
          <button
            onClick={() => (onGoToCreate ? onGoToCreate() : null)}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
          >
            ➕ 立即發起開團
          </button>
          {onViewHistory && (
            <button
              onClick={onViewHistory}
              className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all text-xs"
            >
              📜 查看歷史開團紀錄
            </button>
          )}
        </div>
      </div>
    );
  }

  // 結案歸檔此團 (需求 4)
  const handleArchive = () => {
    if (
      window.confirm(
        `確定要將「${groupData.storeName}」本次團購結案歸檔嗎？\n\n所有點餐名單、應付現金與核銷狀態將完整保存於歷史檔案庫中，供日後查閱與匯出 CSV 報帳！`
      )
    ) {
      if (onArchiveGroup) {
        onArchiveGroup(groupData);
      }
    }
  };

  // 儲存主揪自己的飲料
  const handleSaveHostDrink = (e) => {
    e.preventDefault();
    const hostName = groupData.adminName || '主揪';
    const catObj = groupData.categories?.find((c) => c.name === hostCat) || groupData.categories?.[0];
    const itemObj = catObj?.items?.find((i) => i.name === hostItem) || catObj?.items?.[0];
    const basePrice = hostSize === '中杯' ? itemObj?.priceM || 0 : itemObj?.priceL || 0;

    const newOrderData = {
      userName: hostName,
      items: [
        {
          itemName: hostItem,
          size: hostSize,
          price: basePrice,
          sugar: hostSugar,
          ice: hostIce,
          toppings: hostToppings,
          note: hostNote.trim(),
        },
      ],
    };

    const existingOrders = groupData.orders || [];
    const index = existingOrders.findIndex(
      (o) => o.userName.trim().toLowerCase() === hostName.trim().toLowerCase()
    );

    let updatedOrders;
    if (index !== -1) {
      updatedOrders = [...existingOrders];
      updatedOrders[index] = { ...updatedOrders[index], ...newOrderData };
    } else {
      updatedOrders = [
        ...existingOrders,
        {
          id: 'ord_host_' + Date.now(),
          isPaid: false,
          isPicked: false,
          createdAt: new Date().toISOString(),
          ...newOrderData,
        },
      ];
    }

    onUpdateGroup({
      ...groupData,
      orders: updatedOrders,
    });
    setShowHostOrderModal(false);
  };

  // 若 Token 驗證不合法的防呆提示
  if (!isAuthorized) {
    return (
      <div className="max-w-md mx-auto my-12 p-6 bg-white border border-red-200 rounded-2xl shadow-sm text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
        <h3 className="text-lg font-bold text-slate-800">權限不足：無法進入主揪後台</h3>
        <p className="text-xs text-slate-500 leading-relaxed">
          您目前的連線網址中未包含有效的主揪 Admin Token。為保護辦公室結單與金額核銷安全，僅限持開團 Token 的主揪才能進入本管理頁。
        </p>
        <div className="pt-2">
          <p className="text-[11px] text-slate-400">
            如果您是主揪，請使用開團時生成的「主揪管理網址」開啟本頁面。
          </p>
        </div>
      </div>
    );
  }

  const orders = groupData.orders || [];
  const totalPeople = orders.length;
  const totalCups = orders.reduce((sum, ord) => sum + (ord.items?.length || 0), 0);

  // 外送費平攤與溢收計算
  const deliveryCalc = calculateDeliveryFee(groupData.deliveryFee || 0, totalPeople);

  // 計算每筆訂單應付現金
  const ordersWithCalculatedAmount = orders.map((ord) => {
    const drinkSubtotal = (ord.items || []).reduce(
      (sum, it) => sum + calculateItemTotal(it.price, it.toppings),
      0
    );
    const totalAmount = drinkSubtotal > 0 ? drinkSubtotal + deliveryCalc.perPersonFee : 0;
    return {
      ...ord,
      drinkSubtotal,
      totalAmount,
    };
  });

  // 對帳數據計算
  const totalReceivable = ordersWithCalculatedAmount.reduce((sum, o) => sum + o.totalAmount, 0);
  const totalCollectedPaid = ordersWithCalculatedAmount
    .filter((o) => o.isPaid)
    .reduce((sum, o) => sum + o.totalAmount, 0);
  const remainingUnpaid = totalReceivable - totalCollectedPaid;
  const pickedCount = ordersWithCalculatedAmount.filter((o) => o.isPicked).length;
  const unpaidCount = ordersWithCalculatedAmount.filter((o) => !o.isPaid).length;

  // 聚合下單清單 (整合分店、電話、定價分區與營業狀態)
  const orderSummaryText = aggregateOrderSummary(
    groupData.storeName,
    orders,
    groupData.deliveryFee,
    {
      branchName: groupData.branchName,
      phone: groupData.phone,
      region: groupData.region,
      businessHours: groupData.businessHours,
      isOpenToday: groupData.isOpenToday,
    }
  );

  // 切換已付款狀態 (P4 即時寫入)
  const togglePaid = (orderIndex) => {
    const updatedOrders = [...orders];
    updatedOrders[orderIndex].isPaid = !updatedOrders[orderIndex].isPaid;
    onUpdateGroup({ ...groupData, orders: updatedOrders });
  };

  // 切換已取餐狀態 (P4 即時寫入)
  const togglePicked = (orderIndex) => {
    const updatedOrders = [...orders];
    updatedOrders[orderIndex].isPicked = !updatedOrders[orderIndex].isPicked;
    onUpdateGroup({ ...groupData, orders: updatedOrders });
  };

  // 延長 10 分鐘
  const extendTime = () => {
    const [h, m] = (groupData.deadline || '12:00').split(':').map(Number);
    const date = new Date();
    date.setHours(h, m + 10);
    const newDeadline = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    onUpdateGroup({ ...groupData, deadline: newDeadline, status: 'open' });
  };

  // 切換鎖單 / 重新開放狀態
  const toggleStatus = (targetStatus) => {
    onUpdateGroup({ ...groupData, status: targetStatus });
  };

  const copyText = (text, note) => {
    navigator.clipboard.writeText(text);
    setCopyMsg(note);
    setTimeout(() => setCopyMsg(''), 2500);
  };

  const baseUrl = `${window.location.origin}${window.location.pathname}`;
  const publicShareUrl = `${baseUrl}?order=${groupData.orderId}`;
  const adminDirectUrl = `${baseUrl}?order=${groupData.orderId}&token=${groupData.adminToken}`;

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      {/* 頂部管理控制列 */}
      <div className="bg-slate-800 text-white rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h2 className="font-bold text-lg">主揪管理後台 · {groupData.storeName}</h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-[11px] bg-slate-700 px-2.5 py-1 rounded-full text-slate-300">
              <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
              {isCloud ? 'Firebase 雲端同步' : '本機跨頁即時'}
            </span>
            <span className="text-xs bg-slate-700 px-3 py-1 rounded-full font-mono text-slate-300">
              Token: {groupData.adminToken?.substring(0, 8)}... (已授權)
            </span>
            {onResetSystem && (
              <button
                onClick={onResetSystem}
                title="結束本團並清除暫存，重新開新團"
                className="text-xs bg-rose-900/50 hover:bg-rose-800 text-rose-200 border border-rose-700/60 px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 font-bold"
              >
                🧹 結束此團
              </button>
            )}
          </div>
        </div>

        {/* 雙網址快速複製列 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-slate-900/60 p-3 rounded-xl border border-slate-700">
          <div className="flex items-center justify-between gap-1 text-slate-300">
            <span className="truncate">📢 公開填單網址: {publicShareUrl}</span>
            <button
              onClick={() => copyText(publicShareUrl, '已複製公開填單網址！')}
              className="text-emerald-400 hover:text-emerald-300 whitespace-nowrap font-bold flex items-center gap-0.5"
            >
              <Copy className="w-3.5 h-3.5" /> 複製
            </button>
          </div>
          <div className="flex items-center justify-between gap-1 text-slate-300">
            <span className="truncate">🔒 主揪專屬網址: {adminDirectUrl}</span>
            <button
              onClick={() => copyText(adminDirectUrl, '已複製主揪專屬管理網址！')}
              className="text-amber-400 hover:text-amber-300 whitespace-nowrap font-bold flex items-center gap-0.5"
            >
              <Copy className="w-3.5 h-3.5" /> 複製
            </button>
          </div>
        </div>

        {/* 快速狀態與截單控制按鈕群 */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-700">
          <button
            onClick={extendTime}
            className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-xs font-bold rounded-lg transition-all flex items-center gap-1 text-slate-200"
          >
            <Clock className="w-3.5 h-3.5" /> 延長 10 分鐘 (截止: {groupData.deadline})
          </button>

          {groupData.status === 'open' ? (
            <button
              onClick={() => toggleStatus('locked')}
              className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-xs font-bold rounded-lg transition-all flex items-center gap-1 text-white"
            >
              <Lock className="w-3.5 h-3.5" /> 提前截止鎖單
            </button>
          ) : (
            <button
              onClick={() => toggleStatus('open')}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-xs font-bold rounded-lg transition-all flex items-center gap-1 text-white"
            >
              <Unlock className="w-3.5 h-3.5" /> 重新開放點單
            </button>
          )}

          {/* 📢 送達切換廣播大按鈕 */}
          <button
            onClick={() => toggleStatus('arrived')}
            className={`px-4 py-1.5 text-xs font-black rounded-lg transition-all flex items-center gap-1.5 ${
              groupData.status === 'arrived'
                ? 'bg-emerald-500 text-white shadow-md'
                : 'bg-emerald-700 hover:bg-emerald-600 text-white'
            }`}
          >
            <Send className="w-3.5 h-3.5" /> 📢 飲料已送達！發布取餐通知
          </button>

          {/* 🥤 主揪自己點餐/修改飲料 */}
          <button
            onClick={() => setShowHostOrderModal(true)}
            className="px-3 py-1.5 bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold rounded-lg transition-all flex items-center gap-1 shadow-sm"
          >
            🥤 {hostOrder ? `主揪已點 (${hostOrder.items?.[0]?.itemName || '點我修改'})` : '+ 我也要點一杯'}
          </button>

          {/* 👀 前往點餐頁面 */}
          {onGoToOrder && (
            <button
              type="button"
              onClick={onGoToOrder}
              className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-bold rounded-lg transition-all flex items-center gap-1"
            >
              👀 前往同事點餐頁面
            </button>
          )}

          {/* 📦 結案歸檔此團 */}
          {onArchiveGroup && (
            <button
              onClick={handleArchive}
              className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition-all flex items-center gap-1 shadow-sm sm:ml-auto"
            >
              📦 結案歸檔此團
            </button>
          )}
        </div>
      </div>

      {/* 對帳即時總看板 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-[11px] font-bold text-slate-400 block uppercase">累積杯數 / 人數</span>
          <span className="text-2xl font-black text-slate-800">{totalCups} 杯</span>
          <span className="text-xs text-slate-400 ml-1.5">({totalPeople} 人)</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-[11px] font-bold text-slate-400 block uppercase">應收現金總計</span>
          <span className="text-2xl font-black text-slate-800">NT$ {totalReceivable}</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-emerald-100 bg-emerald-50/30 shadow-sm">
          <span className="text-[11px] font-bold text-emerald-600 block uppercase">現場實收現金</span>
          <span className="text-2xl font-black text-emerald-700">NT$ {totalCollectedPaid}</span>
        </div>

        <div className={`p-4 rounded-xl border shadow-sm ${unpaidCount > 0 ? 'bg-red-50/50 border-red-200' : 'bg-slate-50 border-slate-200'}`}>
          <span className="text-[11px] font-bold text-slate-500 block uppercase">尚欠金額 (未付)</span>
          <span className={`text-2xl font-black ${unpaidCount > 0 ? 'text-red-600' : 'text-slate-700'}`}>
            NT$ {remainingUnpaid}
          </span>
          <span className="text-[11px] text-slate-500 block">({unpaidCount} 人未付款)</span>
        </div>
      </div>

      {/* 外送費平攤提示卡 */}
      {groupData.deliveryFee > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-center justify-between text-xs text-amber-900">
          <div className="flex items-center gap-2 font-medium">
            <Coins className="w-4 h-4 text-amber-600" />
            <span>
              總外送費 <strong>${groupData.deliveryFee}</strong> ÷ <strong>{totalPeople}</strong> 人 =
              每人應攤 <strong>${deliveryCalc.perPersonFee}</strong> 元 (無條件進位)
            </span>
          </div>
          {deliveryCalc.surplus > 0 && (
            <span className="bg-amber-200/80 px-2 py-0.5 rounded-full font-bold text-amber-800">
              溢收零錢：+${deliveryCalc.surplus} 元 (留作公積金)
            </span>
          )}
        </div>
      )}

      {/* 📞 門市訂購與一鍵撥號卡片 */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-slate-800 flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                {groupData.storeName}
                {groupData.branchName && (
                  <span className="text-emerald-700 font-bold">({groupData.branchName})</span>
                )}
              </h3>
              {groupData.region && (
                <span className="text-[11px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full border border-amber-200">
                  {groupData.region}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
              <span className="flex items-center gap-1">
                <CalendarCheck className="w-3.5 h-3.5 text-slate-400" />
                {groupData.isOpenToday === false ? '🔴 今日標記公休' : `今日營業: ${groupData.businessHours || '09:30 - 21:30'}`}
              </span>
            </div>
          </div>

          {/* 電話撥打與複製區 */}
          <div className="flex items-center gap-2">
            {groupData.phone ? (
              <>
                <a
                  href={`tel:${groupData.phone}`}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm flex items-center gap-1.5 transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  一鍵撥打門市電話 ({groupData.phone})
                </a>
                <button
                  type="button"
                  onClick={() => copyText(groupData.phone, '已複製分店電話號碼！')}
                  className="px-2.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all flex items-center gap-1"
                >
                  <Copy className="w-3 h-3" />
                  複製號碼
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditingPhone(!isEditingPhone)}
                  className="text-xs text-slate-400 hover:text-slate-600 underline"
                >
                  修改
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditingPhone(true)}
                className="px-3 py-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold rounded-lg hover:bg-amber-100 transition-all flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                + 補充門市訂購電話
              </button>
            )}
          </div>
        </div>

        {/* 門市電話即時修改輸入框 */}
        {isEditingPhone && (
          <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600">分店電話：</span>
            <input
              type="text"
              value={editingPhone}
              onChange={(e) => setEditingPhone(e.target.value)}
              placeholder="例如：049-2236388"
              className="px-2.5 py-1 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
            />
            <button
              type="button"
              onClick={() => {
                onUpdateGroup({ ...groupData, phone: editingPhone.trim() });
                setIsEditingPhone(false);
                setCopyMsg('門市電話已儲存！');
                setTimeout(() => setCopyMsg(''), 2500);
              }}
              className="px-3 py-1 bg-emerald-600 text-white rounded-lg text-xs font-bold"
            >
              儲存
            </button>
            <button
              type="button"
              onClick={() => setIsEditingPhone(false)}
              className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs"
            >
              取消
            </button>
          </div>
        )}
      </div>

      {/* 電話下單彙整文字 (1-A 規格合併) */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
            <Copy className="w-4 h-4 text-emerald-600" />
            電話／LINE 下單彙整單 (已依規格自動聚合杯數)
          </h3>
          <button
            onClick={() => copyText(orderSummaryText, '已複製電話下單彙整文字！')}
            className="text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-1.5 px-3 rounded-lg flex items-center gap-1 shadow-sm transition-all"
          >
            <Copy className="w-3.5 h-3.5" /> 一鍵複製下單文字
          </button>
        </div>

        {copyMsg && (
          <div className="text-xs text-emerald-700 font-bold bg-emerald-50 p-2 rounded-lg border border-emerald-200">
            ✓ {copyMsg}
          </div>
        )}

        <pre className="bg-slate-50 text-slate-700 text-xs p-3.5 rounded-xl border border-slate-200 font-mono whitespace-pre-wrap max-h-52 overflow-y-auto">
          {orderSummaryText}
        </pre>
      </div>

      {/* 現場取餐與付款分開核銷表 (3-B 分開註記模式) */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
              <CheckCheck className="w-4 h-4 text-emerald-600" />
              現場分開核銷表 (付款與取餐獨立標記)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              取餐進度：已取 {pickedCount} / {totalPeople} 人 · 應對「先拿飲料再回座位拿錢」真實情境
            </p>
          </div>
        </div>

        {ordersWithCalculatedAmount.length === 0 ? (
          <p className="text-xs text-slate-400 py-6 text-center">目前尚無點餐資料</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400">
                  <th className="py-2.5 px-3 font-bold">同仁暱稱</th>
                  <th className="py-2.5 px-3 font-bold">訂購品項與規格</th>
                  <th className="py-2.5 px-3 font-bold text-right">應收現金</th>
                  <th className="py-2.5 px-3 font-bold text-center">已付款</th>
                  <th className="py-2.5 px-3 font-bold text-center">已取餐</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ordersWithCalculatedAmount.map((ord, idx) => (
                  <tr key={ord.id || idx} className="hover:bg-slate-50/70 transition-all">
                    <td className="py-3 px-3 font-bold text-slate-800 whitespace-nowrap">
                      {ord.userName}
                    </td>
                    <td className="py-3 px-3 text-slate-600">
                      {ord.items?.map((it, i) => (
                        <div key={i}>
                          <span className="font-medium text-slate-700">{it.itemName}</span> ({it.size}) · {it.ice}/{it.sugar}
                          {it.toppings?.length > 0 && ` + ${it.toppings.map((t) => t.name).join(' ')}`}
                          {it.note && <span className="text-amber-600 ml-1">({it.note})</span>}
                        </div>
                      ))}
                    </td>
                    <td className="py-3 px-3 text-right font-black text-slate-800 whitespace-nowrap text-sm">
                      ${ord.totalAmount}
                    </td>
                    <td className="py-3 px-3 text-center">
                      <button
                        onClick={() => togglePaid(idx)}
                        className={`px-3 py-1 rounded-lg font-bold text-xs transition-all border ${
                          ord.isPaid
                            ? 'bg-emerald-600 text-white border-emerald-600'
                            : 'bg-white text-slate-400 border-slate-300 hover:border-slate-400'
                        }`}
                      >
                        {ord.isPaid ? '✓ 已付' : '未付'}
                      </button>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <button
                        onClick={() => togglePicked(idx)}
                        className={`px-3 py-1 rounded-lg font-bold text-xs transition-all border ${
                          ord.isPicked
                            ? 'bg-emerald-600 text-white border-emerald-600'
                            : 'bg-white text-slate-400 border-slate-300 hover:border-slate-400'
                        }`}
                      >
                        {ord.isPicked ? '✓ 已取' : '未取'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 🥤 主揪點餐 / 修改飲料彈窗 */}
      {showHostOrderModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🥤</span>
                <h3 className="font-bold text-slate-800 text-base">
                  {hostOrder ? '修改主揪飲料' : '主揪自己點一杯'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowHostOrderModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveHostDrink} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  點餐者暱稱 (主揪)
                </label>
                <input
                  type="text"
                  disabled
                  value={`${groupData.adminName || '主揪'} (主揪)`}
                  className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-500 font-bold"
                />
              </div>

              {/* 分類與飲品選擇 */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">飲料分類</label>
                  <select
                    value={hostCat}
                    onChange={(e) => {
                      const newCat = e.target.value;
                      setHostCat(newCat);
                      const catObj = groupData.categories?.find((c) => c.name === newCat);
                      if (catObj?.items?.length > 0) {
                        setHostItem(catObj.items[0].name);
                      }
                    }}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs bg-white focus:ring-2 focus:ring-emerald-500"
                  >
                    {groupData.categories?.map((cat) => (
                      <option key={cat.name} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">品項名稱</label>
                  <select
                    value={hostItem}
                    onChange={(e) => setHostItem(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs bg-white focus:ring-2 focus:ring-emerald-500"
                  >
                    {(
                      groupData.categories?.find((c) => c.name === hostCat)?.items ||
                      groupData.categories?.[0]?.items ||
                      []
                    ).map((it) => (
                      <option key={it.name} value={it.name}>
                        {it.name} (${it.priceL || it.priceM || 0})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 容量選擇 */}
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">容量尺寸</label>
                <div className="flex gap-2">
                  {['大杯', '中杯'].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setHostSize(sz)}
                      className={`flex-1 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                        hostSize === sz
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* 冰塊與甜度 */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">甜度</label>
                  <select
                    value={hostSugar}
                    onChange={(e) => setHostSugar(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs bg-white focus:ring-2 focus:ring-emerald-500"
                  >
                    {[
                      '正常糖 10分',
                      '少糖 7分',
                      '半糖 5分',
                      '微糖 3分',
                      '二分糖 2分',
                      '一分糖 1分',
                      '無糖 0分',
                    ].map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">冰塊</label>
                  <select
                    value={hostIce}
                    onChange={(e) => setHostIce(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs bg-white focus:ring-2 focus:ring-emerald-500"
                  >
                    {[
                      '正常冰',
                      '少冰',
                      '微冰',
                      '去冰',
                      '完全去冰',
                      '常溫',
                      '溫飲',
                      '熱飲',
                    ].map((ice) => (
                      <option key={ice} value={ice}>
                        {ice}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 加料選擇 */}
              {groupData.toppings?.length > 0 && (
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">加料選項</label>
                  <div className="flex flex-wrap gap-2">
                    {groupData.toppings.map((top) => {
                      const isSelected = hostToppings.some((t) => t.name === top.name);
                      return (
                        <button
                          key={top.name}
                          type="button"
                          onClick={() => {
                            if (isSelected) {
                              setHostToppings(hostToppings.filter((t) => t.name !== top.name));
                            } else {
                              setHostToppings([...hostToppings, top]);
                            }
                          }}
                          className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-all ${
                            isSelected
                              ? 'bg-amber-100 border-amber-400 text-amber-900 font-bold'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          + {top.name} (${top.price})
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 備註 */}
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">自訂備註</label>
                <input
                  type="text"
                  value={hostNote}
                  onChange={(e) => setHostNote(e.target.value)}
                  placeholder="例如：壓杯、環保杯折5元、不要太甜"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t">
                <button
                  type="button"
                  onClick={() => setShowHostOrderModal(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-200 transition-all"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 shadow-md transition-all"
                >
                  {hostOrder ? '確認儲存修改' : '加入點餐名單'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
