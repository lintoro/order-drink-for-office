import React, { useState } from 'react';
import { getLastNickname, saveLastNickname, getArchivedGroups, getAllActiveGroups } from '../utils/storage';
import {
  Sparkles,
  Coffee,
  Users,
  ShieldCheck,
  ArrowRight,
  History,
  Store,
  Clock,
  Coins,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

export default function ScreenPortal_Landing({
  groupData,
  onStartCreate,
  onJoinOrder,
  onViewHistory,
}) {
  const [adminNameInput, setAdminNameInput] = useState(getLastNickname() || '');
  const [orderCodeInput, setOrderCodeInput] = useState('');
  const [showCodeInput, setShowCodeInput] = useState(false);
  const archivedGroups = getArchivedGroups();
  const activeGroups = getAllActiveGroups();
  const primaryGroup = groupData || (activeGroups.length > 0 ? activeGroups[0] : null);

  const handleStartHost = (e) => {
    e.preventDefault();
    if (adminNameInput.trim()) {
      saveLastNickname(adminNameInput.trim());
    }
    onStartCreate(adminNameInput.trim() || '主揪');
  };

  const handleJoinByCode = (e) => {
    e.preventDefault();
    if (!orderCodeInput.trim()) {
      alert('請輸入團購代碼或分享網址！');
      return;
    }
    let targetId = orderCodeInput.trim();
    if (targetId.includes('order=')) {
      const match = targetId.match(/order=([^&]+)/);
      if (match && match[1]) targetId = match[1];
    }
    onJoinOrder(targetId);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6 animate-in fade-in duration-300">
      {/* 1. 頂部大廳橫幅 */}
      <div className="text-center pt-2 pb-1">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
          辦公室訂飲料統計
        </h1>
      </div>

      {/* 2. 進行中團購清單 (支援多團並存，問題 1 & 3) */}
      {activeGroups.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              進行中的團購 ({activeGroups.length} 團開跑中)
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {activeGroups.map((g) => (
              <div
                key={g.orderId}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3 hover:shadow-md transition-all"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">
                      {g.storeName} {g.branchName && `(${g.branchName})`}
                    </h3>
                    <span className="text-[11px] bg-white/20 text-emerald-100 px-2 py-0.5 rounded-full font-medium">
                      主揪: {g.adminName || '主揪'}
                    </span>
                  </div>
                  <p className="text-xs text-emerald-100 flex items-center gap-3">
                    <span>⏰ 截止：{g.deadline || '未定'}</span>
                    <span>🥤 已累積：{g.orders?.length || 0} 人點餐</span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onJoinOrder(g.orderId)}
                  className="px-4 py-2 bg-white hover:bg-emerald-50 text-emerald-800 font-bold rounded-xl shadow-sm transition-all flex items-center gap-1 text-xs whitespace-nowrap"
                >
                  進入此團點餐 <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. 兩大核心入口 (主揪發起 vs 同事加入) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* 入口 A：我是主揪 */}
        <div className="bg-white rounded-2xl border-2 border-emerald-200/80 hover:border-emerald-400 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-bold text-2xl">
              👑
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800">我是主揪 · 發起開團</h2>
              <p className="text-xs text-slate-500 mt-1">
                選擇店家菜單或拍照上傳，建立新團購並產生點餐連結。
              </p>
            </div>

            <form onSubmit={handleStartHost} className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  主揪暱稱
                </label>
                <input
                  type="text"
                  value={adminNameInput}
                  onChange={(e) => setAdminNameInput(e.target.value)}
                  placeholder="例如：主揪小明"
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none font-medium text-slate-800"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5 text-sm"
              >
                開始挑選店家開團 <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center gap-1 pt-2 border-t border-slate-100">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>開團後自動產生專屬管理網址與同事點餐連結</span>
          </div>
        </div>

        {/* 入口 B：我是同事 (問題 3 優化：直覺直達，免強制輸入代碼) */}
        <div className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-2xl">
              🥤
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800">我是同事 · 加入點餐</h2>
              <p className="text-xs text-slate-500 mt-1">
                {primaryGroup ? `目前已有進行中的「${primaryGroup.storeName}」，可直接加入：` : '輸入主揪分享的團購代碼或網址進入。'}
              </p>
            </div>

            {/* 若已有進行中的團購，直接提供直達按鈕 */}
            {primaryGroup ? (
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => onJoinOrder(primaryGroup.orderId)}
                  className="w-full py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5 text-sm"
                >
                  🥤 前往【{primaryGroup.storeName}】點餐 <ArrowRight className="w-4 h-4" />
                </button>

                {!showCodeInput ? (
                  <button
                    type="button"
                    onClick={() => setShowCodeInput(true)}
                    className="w-full text-center text-xs text-slate-400 hover:text-slate-600 underline py-1"
                  >
                    想加入其他代碼之團購？點此輸入
                  </button>
                ) : (
                  <form onSubmit={handleJoinByCode} className="space-y-2 pt-1 border-t border-slate-100">
                    <input
                      type="text"
                      value={orderCodeInput}
                      onChange={(e) => setOrderCodeInput(e.target.value)}
                      placeholder="貼上其他團購代碼或完整網址"
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="flex-1 py-1.5 bg-slate-700 text-white font-bold rounded-lg text-xs"
                      >
                        前往該團
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowCodeInput(false)}
                        className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs"
                      >
                        取消
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              <form onSubmit={handleJoinByCode} className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    團購代碼或邀請網址
                  </label>
                  <input
                    type="text"
                    value={orderCodeInput}
                    onChange={(e) => setOrderCodeInput(e.target.value)}
                    placeholder="例如：grp_17906... 或貼上完整網址"
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium text-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5 text-sm"
                >
                  前往點餐頁面 <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          <div className="text-[11px] text-slate-400 flex items-center gap-1 pt-2 border-t border-slate-100">
            <Users className="w-3.5 h-3.5 text-blue-500" />
            <span>送單後建立點餐狀態卡，支援多位同仁代點與結單前修改</span>
          </div>
        </div>
      </div>

      {/* 4. 歷史結案訂單入口 */}
      <div className="bg-slate-100/70 border border-slate-200 rounded-2xl p-4 flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-slate-500" />
          <span className="font-bold text-slate-700">歷史團購紀錄存檔</span>
          <span className="text-slate-400">（累計結案 {archivedGroups.length} 筆團購）</span>
        </div>
        <button
          onClick={onViewHistory}
          className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-0.5 hover:underline"
        >
          查看歷史報帳紀錄 <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
