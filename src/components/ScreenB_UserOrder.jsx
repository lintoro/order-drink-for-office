import React, { useState, useEffect } from 'react';
import { getLastNickname, saveLastNickname } from '../utils/storage';
import { calculateItemTotal, calculateDeliveryFee, upsertUserOrder } from '../utils/calc';
import { isCloudModeEnabled } from '../services/syncService';
import {
  Clock,
  Users,
  Coffee,
  Sparkles,
  CheckCircle,
  AlertCircle,
  ShoppingBag,
  ShieldCheck,
  Radio,
  Phone,
  MapPin,
  CalendarCheck,
} from 'lucide-react';
import confetti from 'canvas-confetti';

const SUGAR_OPTIONS = ['正常糖', '少糖 7分', '半糖 5分', '微糖 3分', '一分糖', '無糖'];
const ICE_OPTIONS = ['正常冰', '少冰', '微冰', '去冰', '完全去冰', '常溫', '溫熱'];

export default function ScreenB_UserOrder({ groupData, onUpdateGroup, onGoToAdmin }) {
  const [userName, setUserName] = useState(getLastNickname());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedItemName, setSelectedItemName] = useState('');
  const [selectedSize, setSelectedSize] = useState('大杯'); // 中杯 | 大杯
  const [selectedSugar, setSelectedSugar] = useState('微糖 3分');
  const [selectedIce, setSelectedIce] = useState('微冰');
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [note, setNote] = useState('');
  const [submitSuccessMsg, setSubmitSuccessMsg] = useState('');

  const isCloud = isCloudModeEnabled();

  // 初始化選單
  useEffect(() => {
    if (groupData?.categories?.length > 0) {
      if (!selectedCategory) {
        setSelectedCategory(groupData.categories[0].name);
      }
    }
  }, [groupData]);

  const currentCategoryObj = groupData?.categories?.find((c) => c.name === selectedCategory) || groupData?.categories?.[0];

  useEffect(() => {
    if (currentCategoryObj?.items?.length > 0) {
      setSelectedItemName(currentCategoryObj.items[0].name);
    }
  }, [currentCategoryObj]);

  const currentItemObj = currentCategoryObj?.items?.find((i) => i.name === selectedItemName) || currentCategoryObj?.items?.[0];
  const basePrice = selectedSize === '中杯' ? currentItemObj?.priceM || 0 : currentItemObj?.priceL || 0;
  const itemCurrentTotal = calculateItemTotal(basePrice, selectedToppings);

  // 切換加料
  const toggleTopping = (topping) => {
    const exists = selectedToppings.find((t) => t.id === topping.id);
    if (exists) {
      setSelectedToppings(selectedToppings.filter((t) => t.id !== topping.id));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  // 送單 (同暱稱自動覆蓋)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName.trim()) {
      alert('請先輸入您的暱稱以方便主揪統計！');
      return;
    }

    saveLastNickname(userName);

    const newItem = {
      itemName: currentItemObj.name,
      size: selectedSize,
      price: basePrice,
      sugar: selectedSugar,
      ice: selectedIce,
      toppings: selectedToppings,
      note: note.trim(),
    };

    const newOrderData = {
      userName: userName.trim(),
      items: [newItem],
    };

    const updatedOrders = upsertUserOrder(groupData.orders || [], newOrderData);
    const updatedGroup = {
      ...groupData,
      orders: updatedOrders,
    };

    onUpdateGroup(updatedGroup);

    // 觸發彩花與成功提示
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
    setSubmitSuccessMsg(`已成功送單！同名送單將自動覆蓋，請安心選購。`);
    setTimeout(() => setSubmitSuccessMsg(''), 4000);
  };

  // 查詢當前使用者的訂單 (用作個人取餐卡與付款資訊)
  const myOrder = groupData?.orders?.find(
    (o) => o.userName.trim().toLowerCase() === userName.trim().toLowerCase()
  );

  // 計算外送費平攤
  const deliveryCalc = calculateDeliveryFee(groupData?.deliveryFee || 0, groupData?.orders?.length || 0);

  // 計算個人應付總額
  const myDrinkCost = myOrder
    ? myOrder.items.reduce((sum, item) => sum + calculateItemTotal(item.price, item.toppings), 0)
    : 0;
  const myTotalPayable = myDrinkCost > 0 ? myDrinkCost + deliveryCalc.perPersonFee : 0;

  const totalCups = (groupData?.orders || []).reduce(
    (acc, curr) => acc + (curr.items?.length || 0),
    0
  );

  // 空狀態防呆引導
  if (!groupData) {
    return (
      <div className="max-w-md mx-auto my-12 p-8 bg-white border border-slate-200 rounded-3xl shadow-sm text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto text-3xl">
          🥤
        </div>
        <h2 className="text-xl font-bold text-slate-800">目前尚無進行中的飲料團</h2>
        <p className="text-sm text-slate-500 leading-relaxed">
          辦公室目前還沒有人開團。您可以立即選一間南投在地名店，發起第一團揪同事喝飲料！
        </p>
        <button
          onClick={() => (onGoToAdmin ? onGoToAdmin('create') : null)}
          className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
        >
          ➕ 立即發起開團
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-5">
      {/* 主揪本機快捷按鈕 */}
      {onGoToAdmin && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2 flex items-center justify-between text-xs text-amber-900">
          <div className="flex items-center gap-1.5 font-bold">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>您擁有本團主揪權限</span>
          </div>
          <button
            onClick={onGoToAdmin}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-3 py-1 rounded-lg transition-all"
          >
            進入主揪管理後台 →
          </button>
        </div>
      )}

      {/* 頂部狀態列 */}
      <div className="bg-emerald-600 text-white rounded-2xl p-5 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider">
              {groupData?.status === 'open' ? '🟢 開放點餐' : groupData?.status === 'locked' ? '🟡 訂購統整中' : '🎉 飲料已送達'}
            </span>
            <span className="flex items-center gap-1 text-[11px] bg-emerald-800/60 px-2 py-0.5 rounded-full text-emerald-100">
              <Radio className="w-3 h-3 text-emerald-300 animate-pulse" />
              {isCloud ? '雲端即時連線' : '本機跨頁即時'}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium">
            <Clock className="w-3.5 h-3.5" />
            截止時間：{groupData?.deadline || '未定'}
          </div>
        </div>

        <div className="flex items-baseline justify-between pt-1">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-2xl font-black">{groupData?.storeName || '今日手搖團購'}</h2>
              {groupData?.branchName && (
                <span className="text-xs bg-emerald-800/80 px-2.5 py-0.5 rounded-full font-bold text-emerald-100 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {groupData.branchName}
                </span>
              )}
              {groupData?.region && (
                <span className="text-[11px] bg-amber-400 text-amber-950 px-2 py-0.5 rounded-full font-black">
                  {groupData.region}
                </span>
              )}
            </div>

            {/* 分店電話與營業狀態 */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-emerald-100 mt-1.5">
              {groupData?.phone && (
                <span className="flex items-center gap-1 font-medium">
                  <Phone className="w-3.5 h-3.5 text-emerald-200" />
                  {groupData.phone}
                </span>
              )}
              {groupData?.businessHours && (
                <span className="flex items-center gap-1">
                  <CalendarCheck className="w-3.5 h-3.5 text-emerald-200" />
                  {groupData.isOpenToday === false ? '🔴 標記公休' : `營業中: ${groupData.businessHours}`}
                </span>
              )}
            </div>
          </div>
          <div className="text-right">
            <span className="text-3xl font-black">{totalCups}</span>
            <span className="text-xs ml-1 opacity-90">杯</span>
          </div>
        </div>
      </div>

      {/* 公休特別警示條 */}
      {groupData?.isOpenToday === false && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-xs px-4 py-2.5 rounded-xl font-bold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
          <span>⚠️ 提醒：本分店可能今日公休或非營業時段，送單前請確認！</span>
        </div>
      )}

      {/* 🌟 飲料已送達：置頂顯示「個人取餐卡」 */}
      {groupData?.status === 'arrived' && myOrder && (
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl p-6 shadow-lg space-y-4">
          <div className="flex items-center justify-between border-b border-white/20 pb-3">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-amber-200" />
              <span className="font-black text-lg">個人取餐卡</span>
            </div>
            <div className="flex gap-2">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${myOrder.isPaid ? 'bg-emerald-700 text-white' : 'bg-red-700 text-white'}`}>
                {myOrder.isPaid ? '✓ 已付款' : '未付款'}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${myOrder.isPicked ? 'bg-emerald-700 text-white' : 'bg-amber-800 text-white'}`}>
                {myOrder.isPicked ? '✓ 已取餐' : '未取餐'}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs text-amber-100">點餐同仁：<strong className="text-white text-base">{myOrder.userName}</strong></div>
            <div className="bg-white/10 rounded-xl p-3 space-y-1">
              {myOrder.items.map((it, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm">
                  <span>{it.itemName} ({it.size}) - {it.ice}/{it.sugar} {it.toppings.map(t => '+' + t.name).join(' ')}</span>
                  <span className="font-bold">NT$ {calculateItemTotal(it.price, it.toppings)}</span>
                </div>
              ))}
              {deliveryCalc.perPersonFee > 0 && (
                <div className="flex justify-between items-center text-xs text-amber-100 pt-1 border-t border-white/10">
                  <span>外送費無條件進位平攤</span>
                  <span>+ NT$ {deliveryCalc.perPersonFee}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-baseline justify-between pt-2 border-t border-white/20">
            <span className="text-sm font-bold">現場應備現金：</span>
            <div className="text-right">
              <span className="text-3xl font-black text-amber-100">NT$ {myTotalPayable}</span>
            </div>
          </div>
          <p className="text-xs text-amber-100 text-center">💡 請自備零錢前往主揪座位一手交錢一手交貨！</p>
        </div>
      )}

      {/* 點餐表單區 (未鎖定時開放) */}
      {groupData?.status === 'open' ? (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 space-y-5">
          {submitSuccessMsg && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              {submitSuccessMsg}
            </div>
          )}

          {/* 1. 暱稱 */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              您的暱稱 (重複送單將自動覆蓋)
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="例如：王小美 / 行銷阿明"
              required
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* 2. 分類與飲料名稱 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                系列分類
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                {groupData?.categories?.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                飲品名稱
              </label>
              <select
                value={selectedItemName}
                onChange={(e) => setSelectedItemName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                {currentCategoryObj?.items?.map((item) => (
                  <option key={item.id || item.name} value={item.name}>
                    {item.name} (中:${item.priceM} / 大:${item.priceL})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3. 容量選擇 */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              容量規格
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['大杯', '中杯'].map((size) => (
                <button
                  type="button"
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                    selectedSize === size
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {size} (NT$ {size === '中杯' ? currentItemObj?.priceM : currentItemObj?.priceL})
                </button>
              ))}
            </div>
          </div>

          {/* 4. 甜度按鈕 */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              甜度
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
              {SUGAR_OPTIONS.map((sugar) => (
                <button
                  type="button"
                  key={sugar}
                  onClick={() => setSelectedSugar(sugar)}
                  className={`py-2 px-1 text-center rounded-xl text-xs font-medium transition-all border ${
                    selectedSugar === sugar
                      ? 'bg-emerald-600 text-white border-emerald-600 font-bold'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {sugar}
                </button>
              ))}
            </div>
          </div>

          {/* 5. 冰塊按鈕 */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              冰塊溫度
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
              {ICE_OPTIONS.map((ice) => (
                <button
                  type="button"
                  key={ice}
                  onClick={() => setSelectedIce(ice)}
                  className={`py-2 px-1 text-center rounded-xl text-xs font-medium transition-all border ${
                    selectedIce === ice
                      ? 'bg-emerald-600 text-white border-emerald-600 font-bold'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {ice}
                </button>
              ))}
            </div>
          </div>

          {/* 6. 加料按鈕群 (複選計價) */}
          {groupData?.toppings?.length > 0 && (
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                加料選單 (可複選)
              </label>
              <div className="flex flex-wrap gap-2">
                {groupData.toppings.map((top) => {
                  const isChecked = selectedToppings.some((t) => t.id === top.id);
                  return (
                    <button
                      type="button"
                      key={top.id}
                      onClick={() => toggleTopping(top)}
                      className={`py-1.5 px-3 rounded-xl text-xs font-medium border transition-all ${
                        isChecked
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300 font-bold shadow-sm'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {isChecked ? '✓ ' : '+ '}
                      {top.name} (+${top.price})
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 7. 備註 */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              備註欄 (可填環保杯等)
            </label>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="例如：自備環保杯、需買袋子等"
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* 金額統計與送出按鈕 */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500">飲品小計 (不含外送費)：</span>
              <span className="text-xl font-black text-slate-800 ml-1">NT$ {itemCurrentTotal}</span>
            </div>

            <button
              type="submit"
              className="py-2.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm shadow-emerald-600/20 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              確認送單 / 覆蓋舊單
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 text-center space-y-2">
          <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
          <h3 className="font-bold text-slate-700">🕒 截單時間已過或現正訂購中</h3>
          <p className="text-xs text-slate-500">目前表單已暫時鎖定，主揪正在打電話彙整向店家下單中！</p>
        </div>
      )}

      {/* 底部「大家點了什麼」即時列表 (公開透明跟單) */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-emerald-600" />
            大家點了什麼 ({groupData?.orders?.length || 0} 人跟單)
          </h3>
          <span className="text-xs text-slate-400">同名送單將自動更新</span>
        </div>

        {(!groupData?.orders || groupData.orders.length === 0) ? (
          <p className="text-xs text-slate-400 py-4 text-center">尚未有人點單，搶頭香成為第一個吧！</p>
        ) : (
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {groupData.orders.map((ord, idx) => {
              const isMine = ord.userName.trim().toLowerCase() === userName.trim().toLowerCase();
              return (
                <div
                  key={ord.id || idx}
                  className={`p-3 rounded-xl border text-xs flex justify-between items-center transition-all ${
                    isMine ? 'bg-emerald-50/70 border-emerald-200' : 'bg-slate-50/70 border-slate-100'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="font-bold text-slate-800 flex items-center gap-1.5">
                      <span>{ord.userName}</span>
                      {isMine && (
                        <span className="bg-emerald-600 text-white text-[10px] px-1.5 py-0.2 rounded-full">
                          我
                        </span>
                      )}
                    </div>
                    {ord.items?.map((it, i) => (
                      <div key={i} className="text-slate-600">
                        {it.itemName} ({it.size}) · {it.sugar}/{it.ice}
                        {it.toppings?.length > 0 && ` + ${it.toppings.map((t) => t.name).join(' ')}`}
                        {it.note && <span className="text-amber-600 ml-1">({it.note})</span>}
                      </div>
                    ))}
                  </div>

                  <div className="text-right">
                    <span className="font-bold text-slate-800">
                      NT${' '}
                      {ord.items?.reduce(
                        (sum, it) => sum + calculateItemTotal(it.price, it.toppings),
                        0
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
