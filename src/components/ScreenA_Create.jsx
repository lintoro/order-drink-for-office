import React, { useState } from 'react';
import { DEFAULT_STORES } from '../data/defaultStores';
import { generateAdminToken } from '../utils/calc';
import { Store, Clock, DollarSign, Plus, Trash2, Sparkles, CheckCircle2, Copy } from 'lucide-react';

export default function ScreenA_Create({ onGroupCreated }) {
  const [selectedStoreId, setSelectedStoreId] = useState(DEFAULT_STORES[0].id);
  const [deliveryFee, setDeliveryFee] = useState(40);
  
  // 預設 30 分鐘後截止
  const defaultDeadline = () => {
    const d = new Date(Date.now() + 30 * 60 * 1000);
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  };
  const [deadline, setDeadline] = useState(defaultDeadline());

  // 取得選中之菜單資料以供客製編輯
  const currentPreset = DEFAULT_STORES.find((s) => s.id === selectedStoreId) || DEFAULT_STORES[0];
  const [menuCategories, setMenuCategories] = useState(currentPreset.categories);
  const [toppings, setToppings] = useState(currentPreset.toppings);
  const [createdResult, setCreatedResult] = useState(null);
  const [copyNotice, setCopyNotice] = useState('');

  // 切換店家範本
  const handleStoreChange = (storeId) => {
    setSelectedStoreId(storeId);
    const store = DEFAULT_STORES.find((s) => s.id === storeId);
    if (store) {
      setMenuCategories(store.categories);
      setToppings(store.toppings);
    }
  };

  // 修改品項價格或名稱
  const handleItemChange = (catIndex, itemIndex, field, value) => {
    const updated = JSON.parse(JSON.stringify(menuCategories));
    updated[catIndex].items[itemIndex][field] = field.includes('price') ? Number(value) || 0 : value;
    setMenuCategories(updated);
  };

  // 手動追加一筆品項
  const handleAddItem = (catIndex) => {
    const updated = JSON.parse(JSON.stringify(menuCategories));
    updated[catIndex].items.push({
      id: 'custom_' + Date.now(),
      name: '自訂品項',
      priceM: 35,
      priceL: 45,
    });
    setMenuCategories(updated);
  };

  // 刪除品項
  const handleDeleteItem = (catIndex, itemIndex) => {
    const updated = JSON.parse(JSON.stringify(menuCategories));
    updated[catIndex].items.splice(itemIndex, 1);
    setMenuCategories(updated);
  };

  // 一鍵開團
  const handleCreateGroup = (e) => {
    e.preventDefault();
    const orderId = 'grp_' + Math.random().toString(36).substring(2, 9);
    const adminToken = generateAdminToken();

    const newGroup = {
      orderId,
      adminToken,
      storeName: currentPreset.name,
      deadline,
      deliveryFee: Number(deliveryFee) || 0,
      categories: menuCategories,
      toppings,
      status: 'open', // open | locked | arrived
      createdAt: new Date().toISOString(),
      orders: [], // 點餐同仁名單
    };

    setCreatedResult(newGroup);
    if (onGroupCreated) {
      onGroupCreated(newGroup);
    }
  };

  const copyToClipboard = (text, msg) => {
    navigator.clipboard.writeText(text);
    setCopyNotice(msg);
    setTimeout(() => setCopyNotice(''), 2500);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Store className="w-5 h-5 text-emerald-600" />
            主揪快速開團
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            免記帳號密碼，開團自動產生「公開填單網址」與「主揪專屬管理網址」。
          </p>
        </div>

        <form onSubmit={handleCreateGroup} className="space-y-5">
          {/* 1. 店家來源選取 */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              選擇開團店家 (歷史常用庫)
            </label>
            <select
              value={selectedStoreId}
              onChange={(e) => handleStoreChange(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
            >
              {DEFAULT_STORES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.tagline})
                </option>
              ))}
            </select>
          </div>

          {/* 2. 截止時間與預估外送費 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                截單時間
              </label>
              <input
                type="time"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-slate-400" />
                預估全單外送費 (NT$)
              </label>
              <input
                type="number"
                min="0"
                step="5"
                value={deliveryFee}
                onChange={(e) => setDeliveryFee(e.target.value)}
                placeholder="0"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">
                結單時全單平攤，小數自動無條件進位。
              </span>
            </div>
          </div>

          {/* 3. 菜單快速檢視與微調 */}
          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                菜單品項核對與即時微調
              </h3>
              <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                點擊文字或金額可直接修改
              </span>
            </div>

            <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
              {menuCategories.map((cat, catIdx) => (
                <div key={catIdx} className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">{cat.name}</span>
                    <button
                      type="button"
                      onClick={() => handleAddItem(catIdx)}
                      className="text-xs text-emerald-600 hover:text-emerald-700 flex items-center gap-0.5 font-medium"
                    >
                      <Plus className="w-3 h-3" /> 加品項
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    {cat.items.map((item, itemIdx) => (
                      <div key={item.id || itemIdx} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200 text-xs">
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => handleItemChange(catIdx, itemIdx, 'name', e.target.value)}
                          className="flex-1 font-medium text-slate-800 bg-transparent focus:outline-none"
                        />
                        <div className="flex items-center gap-1 text-slate-500">
                          <span>中:$</span>
                          <input
                            type="number"
                            value={item.priceM}
                            onChange={(e) => handleItemChange(catIdx, itemIdx, 'priceM', e.target.value)}
                            className="w-12 text-center bg-slate-50 border border-slate-200 rounded px-1 py-0.5"
                          />
                        </div>
                        <div className="flex items-center gap-1 text-slate-500">
                          <span>大:$</span>
                          <input
                            type="number"
                            value={item.priceL}
                            onChange={(e) => handleItemChange(catIdx, itemIdx, 'priceL', e.target.value)}
                            className="w-12 text-center bg-slate-50 border border-slate-200 rounded px-1 py-0.5"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => handleDeleteItem(catIdx, itemIdx)}
                          className="text-slate-400 hover:text-red-500 ml-1 p-1"
                          title="刪除品項"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. 開團確認按鈕 */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            確認開團並生成雙網址
          </button>
        </form>
      </div>

      {/* 開團成功派發展現 */}
      {createdResult && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-4 animate-in fade-in duration-300">
          <div className="flex items-center gap-2 text-emerald-800 font-bold">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            開團成功！已備妥公務群與管理網址
          </div>

          <div className="space-y-3">
            <div className="bg-white p-3 rounded-xl border border-emerald-100 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">📢 貼入 LINE 公務群組訊息</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `🥤【辦公室訂飲料】今天喝 ${createdResult.storeName}！\n⏰ 截止時間：${createdResult.deadline}\n👉 請點擊專屬連結點餐（請勿在群組+1）：\n${window.location.origin}?order=${createdResult.orderId}`,
                      '已複製公務群通知文字！'
                    )
                  }
                  className="text-xs text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1"
                >
                  <Copy className="w-3.5 h-3.5" /> 一鍵複製通知
                </button>
              </div>
              <p className="text-xs text-slate-500 font-mono bg-slate-50 p-2 rounded border border-slate-100 break-all">
                🥤【辦公室訂飲料】今天喝 {createdResult.storeName}！<br />
                ⏰ 截止時間：{createdResult.deadline}<br />
                👉 請點選網址填單：{window.location.origin}?order={createdResult.orderId}
              </p>
            </div>

            {copyNotice && (
              <div className="text-xs text-emerald-700 font-bold text-center bg-emerald-100 py-1.5 rounded-lg">
                ✓ {copyNotice}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
