import React, { useState } from 'react';
import {
  calculateDeliveryFee,
  calculateItemTotal,
  aggregateOrderSummary,
} from '../utils/calc';
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
} from 'lucide-react';

export default function ScreenC_Admin({ groupData, onUpdateGroup }) {
  const [copyMsg, setCopyMsg] = useState('');

  if (!groupData) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center text-slate-500">
        目前尚未開團，請先至「主揪開團」頁面建立一個新團！
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

  // 聚合下單清單
  const orderSummaryText = aggregateOrderSummary(
    groupData.storeName,
    orders,
    groupData.deliveryFee
  );

  // 切換已付款狀態
  const togglePaid = (orderIndex) => {
    const updatedOrders = [...orders];
    updatedOrders[orderIndex].isPaid = !updatedOrders[orderIndex].isPaid;
    onUpdateGroup({ ...groupData, orders: updatedOrders });
  };

  // 切換已取餐狀態
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

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      {/* 頂部管理控制列 */}
      <div className="bg-slate-800 text-white rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h2 className="font-bold text-lg">主揪管理後台 · {groupData.storeName}</h2>
          </div>
          <span className="text-xs bg-slate-700 px-3 py-1 rounded-full font-mono text-slate-300">
            Token: {groupData.adminToken?.substring(0, 10)}... (具備管理權限)
          </span>
        </div>

        {/* 快速狀態與截單控制按鈕群 */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-700">
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
    </div>
  );
}
