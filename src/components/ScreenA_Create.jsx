import React, { useState, useEffect } from 'react';
import { DEFAULT_STORES } from '../data/defaultStores';
import { generateAdminToken } from '../utils/calc';
import {
  parseMenuImageWithGemini,
  parseMenuFromTextOrUrl,
  getGeminiApiKey,
  setGeminiApiKey,
  getWorkerProxyUrl,
  setWorkerProxyUrl,
} from '../services/geminiService';
import { getCustomStores, saveCustomStore } from '../utils/storage';
import { saveMenuToCache } from '../utils/menuCache';
import {
  Store,
  Clock,
  DollarSign,
  Plus,
  Trash2,
  Sparkles,
  CheckCircle2,
  Copy,
  Camera,
  Upload,
  Loader2,
  Download,
  FileJson,
  KeyRound,
  Link,
  Globe,
  FileText,
  Phone,
  MapPin,
  CalendarCheck,
  ArrowUpDown,
} from 'lucide-react';

export default function ScreenA_Create({ onGroupCreated }) {
  // 店家清單（結合內建與自訂歷史庫）
  const [customStores, setCustomStores] = useState(getCustomStores());
  const allStores = [...customStores, ...DEFAULT_STORES];

  const [selectedStoreId, setSelectedStoreId] = useState(allStores[0]?.id || DEFAULT_STORES[0].id);
  const [deliveryFee, setDeliveryFee] = useState(40);
  
  // 預設 30 分鐘後截止
  const defaultDeadline = () => {
    const d = new Date(Date.now() + 30 * 60 * 1000);
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  };
  const [deadline, setDeadline] = useState(defaultDeadline());

  // 取得選中之菜單資料以供客製編輯
  const currentPreset = allStores.find((s) => s.id === selectedStoreId) || DEFAULT_STORES[0];
  const [storeName, setStoreName] = useState(currentPreset.name);
  const [branchName, setBranchName] = useState(currentPreset.branchName || '');
  const [phone, setPhone] = useState(currentPreset.phone || '');
  const [region, setRegion] = useState(currentPreset.region || '中南部價');
  const [businessHours, setBusinessHours] = useState(currentPreset.businessHours || '09:30 - 21:30');
  const [isOpenToday, setIsOpenToday] = useState(
    currentPreset.isOpenToday !== undefined ? currentPreset.isOpenToday : true
  );
  const [menuCategories, setMenuCategories] = useState(currentPreset.categories);
  const [toppings, setToppings] = useState(currentPreset.toppings);

  // AI 辨識輸入模式切換 ('text' | 'image')
  const [aiMode, setAiMode] = useState('text');
  const [textOrUrlInput, setTextOrUrlInput] = useState('');

  // 圖片辨識狀態
  const [menuImage, setMenuImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isParsing, setIsParsing] = useState(false);
  const [parseError, setParseError] = useState('');
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [tempApiKey, setTempApiKey] = useState(getGeminiApiKey());
  const [tempProxyUrl, setTempProxyUrl] = useState(getWorkerProxyUrl());

  const [createdResult, setCreatedResult] = useState(null);
  const [copyNotice, setCopyNotice] = useState('');
  const [saveStoreNotice, setSaveStoreNotice] = useState('');

  // 初始化：將南投在地名店自動預載入本地快取 (方案 A)
  useEffect(() => {
    DEFAULT_STORES.forEach((store) => {
      if (store.branchName) {
        saveMenuToCache(`${store.name} ${store.branchName}`, store, 30);
      }
    });
  }, []);

  // 切換店家範本
  const handleStoreChange = (storeId) => {
    setSelectedStoreId(storeId);
    const store = allStores.find((s) => s.id === storeId);
    if (store) {
      setStoreName(store.name);
      setBranchName(store.branchName || '');
      setPhone(store.phone || '');
      setRegion(store.region || '中南部價');
      setBusinessHours(store.businessHours || '09:30 - 21:30');
      setIsOpenToday(store.isOpenToday !== undefined ? store.isOpenToday : true);
      setMenuCategories(store.categories);
      setToppings(store.toppings || []);
    }
  };

  // 南北分區價格批次切換 (每杯 ±5 元微調)
  const handleAdjustRegionPrice = (targetRegion) => {
    if (targetRegion === region) return;
    const isTargetNorth = targetRegion === '北部價';
    const delta = isTargetNorth ? 5 : -5;

    const updatedCategories = menuCategories.map((cat) => ({
      ...cat,
      items: cat.items.map((item) => ({
        ...item,
        priceM: Math.max(10, item.priceM + delta),
        priceL: Math.max(15, item.priceL + delta),
      })),
    }));

    setMenuCategories(updatedCategories);
    setRegion(targetRegion);
    setSaveStoreNotice(
      `✓ 已切換為「${targetRegion}」，所有品項價格已自動 ${delta > 0 ? '+5' : '-5'} 元！`
    );
    setTimeout(() => setSaveStoreNotice(''), 3500);
  };

  // 處理菜單圖片上傳
  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setMenuImage(file);
      setImagePreview(URL.createObjectURL(file));
      setParseError('');
    }
  };

  // 1. 啟動圖片 AI 辨識
  const handleStartImageParsing = async () => {
    if (!menuImage) return;
    const currentKey = getGeminiApiKey();
    const proxyUrl = getWorkerProxyUrl();
    if (!currentKey && !proxyUrl) {
      setShowApiKeyModal(true);
      return;
    }

    setIsParsing(true);
    setParseError('');
    try {
      const result = await parseMenuImageWithGemini(menuImage);
      setStoreName(result.storeName);
      setBranchName(result.branchName || '');
      setPhone(result.phone || '');
      setRegion(result.region || '中南部價');
      setBusinessHours(result.businessHours || '09:30 - 21:30');
      setIsOpenToday(result.isOpenToday !== undefined ? result.isOpenToday : true);
      setMenuCategories(result.categories);
      setToppings(result.toppings);
      setSelectedStoreId('custom_parsed');
      setSaveStoreNotice(`🎉 圖片辨識成功！已帶入「${result.storeName} ${result.branchName || ''}」菜單與${result.region || '分區'}價格（已自動存入本地快取）。`);
      setTimeout(() => setSaveStoreNotice(''), 4000);
    } catch (err) {
      console.error(err);
      setParseError(err.message || '辨識發生錯誤');
    } finally {
      setIsParsing(false);
    }
  };

  // 2. 啟動 Google 連結 / 店名 / 複製文字 AI 辨識 (整合方案 A 快取與方案 B 中繼)
  const handleStartTextParsing = async () => {
    const rawInput = textOrUrlInput.trim();
    if (!rawInput) {
      alert('請先輸入 Google 地圖店家連結、店名或貼上菜單文字！');
      return;
    }

    // 智慧偵測：若貼上的是 Google Search Viewer 內部加密連結
    if (rawInput.includes('google.com/searchviewer') && !rawInput.includes(' ')) {
      setParseError(
        '💡 您貼上的是 Google 搜尋預覽的內部加密暫存連結（不含店名文字）。請直接輸入「手搖飲店名」（例如：UG 樂己 南投復興店、清心福全 南投南陽店），AI 即可為您精準提取分店電話與南北定價！'
      );
      return;
    }

    const currentKey = getGeminiApiKey();
    const proxyUrl = getWorkerProxyUrl();
    if (!currentKey && !proxyUrl) {
      setShowApiKeyModal(true);
      return;
    }

    setIsParsing(true);
    setParseError('');
    try {
      const result = await parseMenuFromTextOrUrl(rawInput);
      setStoreName(result.storeName);
      setBranchName(result.branchName || '');
      setPhone(result.phone || '');
      setRegion(result.region || '中南部價');
      setBusinessHours(result.businessHours || '09:30 - 21:30');
      setIsOpenToday(result.isOpenToday !== undefined ? result.isOpenToday : true);
      setMenuCategories(result.categories);
      setToppings(result.toppings);
      setSelectedStoreId('custom_parsed');

      if (result._fromCache) {
        setSaveStoreNotice(
          `⚡【本地快取秒讀】「${result.storeName} ${result.branchName || ''}」已載入！0 秒響應、0 API 消耗！`
        );
      } else {
        setSaveStoreNotice(
          `🎉 已成功識別「${result.storeName} ${result.branchName || ''}」！適用【${result.region || '分區定價'}】，電話：${result.phone || '無'}（已快取）`
        );
      }
      setTimeout(() => setSaveStoreNotice(''), 5000);
    } catch (err) {
      console.error(err);
      setParseError(err.message || '辨識發生錯誤');
    } finally {
      setIsParsing(false);
    }
  };

  // 保存當前菜單至本機歷史店家庫
  const handleSaveToHistory = () => {
    const newStorePreset = {
      id: 'store_custom_' + Date.now(),
      name: storeName.trim() || '自訂店家',
      branchName: branchName.trim(),
      phone: phone.trim(),
      region: region.trim(),
      businessHours: businessHours.trim(),
      isOpenToday,
      tagline: `${region || '分區'} · ${branchName || '自訂分店'}`,
      categories: menuCategories,
      toppings: toppings,
    };
    saveCustomStore(newStorePreset);
    const updated = getCustomStores();
    setCustomStores(updated);
    setSaveStoreNotice(`✓ 已成功將「${newStorePreset.name} (${newStorePreset.branchName || '分店'})」存入常用店家庫！`);
    setTimeout(() => setSaveStoreNotice(''), 3000);
  };

  // 匯出歷史店家 JSON
  const handleExportStores = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(customStores, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `drink_stores_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // 匯入歷史店家 JSON
  const handleImportStores = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (Array.isArray(imported)) {
          imported.forEach((s) => saveCustomStore(s));
          setCustomStores(getCustomStores());
          alert('成功匯入常用店家菜單資料！');
        }
      } catch (err) {
        alert('匯入失敗：無效的 JSON 檔案');
      }
    };
    reader.readAsText(file);
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

    const baseUrl = `${window.location.origin}${window.location.pathname}`;
    const publicUrl = `${baseUrl}?order=${orderId}`;
    const adminUrl = `${baseUrl}?order=${orderId}&token=${adminToken}`;

    const newGroup = {
      orderId,
      adminToken,
      storeName: storeName.trim() || '手搖飲團購',
      branchName: branchName.trim(),
      phone: phone.trim(),
      region: region.trim(),
      businessHours: businessHours.trim(),
      isOpenToday,
      deadline,
      deliveryFee: Number(deliveryFee) || 0,
      categories: menuCategories,
      toppings,
      status: 'open', // open | locked | arrived
      createdAt: new Date().toISOString(),
      publicUrl,
      adminUrl,
      orders: [], // 點餐名單
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
      {/* 1. 開團表單 */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Store className="w-5 h-5 text-emerald-600" />
            主揪快速開團 (支援 AI 菜單解析)
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            可拍照/上傳菜單讓 Gemini Flash 自動辨識，或自常用店家庫秒開。
          </p>
        </div>

        {/* 🤖 P3：Gemini 3.8 Flash 智慧菜單解析區 (雙模式：Google 連結/文字 與 圖片) */}
        <div className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-2">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              AI 智慧生成菜單 (Google Gemini 3.8 Flash)
            </span>
            {/* 模式切換按鈕群 */}
            <div className="flex bg-slate-200/70 p-0.5 rounded-lg text-xs font-bold">
              <button
                type="button"
                onClick={() => setAiMode('text')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
                  aiMode === 'text'
                    ? 'bg-white text-emerald-700 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <Globe className="w-3.5 h-3.5" /> 貼 Google 連結 / 文字
              </button>
              <button
                type="button"
                onClick={() => setAiMode('image')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
                  aiMode === 'image'
                    ? 'bg-white text-emerald-700 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <Camera className="w-3.5 h-3.5" /> 拍照 / 上傳圖片
              </button>
            </div>
          </div>

          {/* 模式 A：貼 Google 店家連結 / 店名 / 複製文字 */}
          {aiMode === 'text' && (
            <div className="space-y-2.5 animate-in fade-in duration-200">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-600 block">
                  貼上 Google 地圖店家分享連結、手搖飲品牌名稱，或任何複製的菜單文字：
                </label>
                <textarea
                  rows={2}
                  value={textOrUrlInput}
                  onChange={(e) => setTextOrUrlInput(e.target.value)}
                  placeholder="例如：貼上 Google Maps 網址 (https://maps.app.goo.gl/...)，或輸入「一沐日 新竹巨城店」，或直接整段貼上店家粉專菜單文字..."
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none font-sans text-slate-800"
                />
              </div>

              {/* 快速示範熱門點選 (南投在地名店快捷鍵) */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
                <span className="font-bold">南投熱門快捷：</span>
                {[
                  'UG 樂己 南投復興店',
                  '清心福全 南投南崗店',
                  '得正 草屯太平店',
                  '50嵐 南投民族店',
                  'TEA TOP 中興新村店',
                  '五桐號 草屯太平店',
                ].map((demo) => (
                  <button
                    type="button"
                    key={demo}
                    onClick={() => setTextOrUrlInput(demo)}
                    className="bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md transition-all font-medium"
                  >
                    + {demo}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleStartTextParsing}
                disabled={isParsing}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white text-xs font-bold rounded-xl shadow-sm flex items-center justify-center gap-1.5 transition-all"
              >
                {isParsing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Gemini 3.8 Flash 解析品牌菜單中 (約2秒)...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    🚀 AI 智慧生成菜單與價格
                  </>
                )}
              </button>
            </div>
          )}

          {/* 模式 B：拍照 / 上傳圖片 */}
          {aiMode === 'image' && (
            <div className="space-y-2.5 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row gap-2.5 items-center">
                <label className="flex-1 w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer shadow-sm transition-all">
                  <Upload className="w-4 h-4 text-slate-400" />
                  {menuImage ? menuImage.name : '選擇或手機拍照菜單圖片'}
                  <input type="file" accept="image/*" onChange={handleImageSelect} className="hidden" />
                </label>

                {menuImage && (
                  <button
                    type="button"
                    onClick={handleStartImageParsing}
                    disabled={isParsing}
                    className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white text-xs font-bold rounded-xl shadow-sm flex items-center justify-center gap-1.5 transition-all whitespace-nowrap"
                  >
                    {isParsing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Gemini 圖片辨識中...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        開始圖片辨識
                      </>
                    )}
                  </button>
                )}
              </div>

              {imagePreview && (
                <div className="relative inline-block">
                  <img
                    src={imagePreview}
                    alt="菜單預覽"
                    className="h-16 w-auto rounded-lg border border-slate-200 object-cover shadow-sm"
                  />
                </div>
              )}
            </div>
          )}

          {parseError && (
            <div className="text-xs text-red-600 font-bold bg-red-50 p-2.5 rounded-xl border border-red-200">
              ⚠️ {parseError}
              <button
                type="button"
                onClick={() => setShowApiKeyModal(true)}
                className="underline ml-2 text-red-700 font-medium"
              >
                點此設定 Gemini API Key
              </button>
            </div>
          )}
        </div>

        <form onSubmit={handleCreateGroup} className="space-y-5">
          {/* 店家來源選取 & 店家名稱 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  從常用庫快速選擇
                </label>
                <div className="flex gap-2 text-[11px] text-emerald-600 font-medium">
                  <button type="button" onClick={handleExportStores} className="flex items-center gap-0.5 hover:underline">
                    <Download className="w-3 h-3" /> 匯出
                  </button>
                  <label className="flex items-center gap-0.5 hover:underline cursor-pointer">
                    <FileJson className="w-3 h-3" /> 匯入
                    <input type="file" accept=".json" onChange={handleImportStores} className="hidden" />
                  </label>
                </div>
              </div>
              <select
                value={selectedStoreId}
                onChange={(e) => handleStoreChange(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
              >
                {/* 1. 歷史自訂菜單 */}
                {customStores.length > 0 && (
                  <optgroup label="💾 我的歷史自訂店家">
                    {customStores.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} {s.branchName ? `(${s.branchName})` : ''} - {s.tagline || '自訂'}
                      </option>
                    ))}
                  </optgroup>
                )}

                {/* 2. 南投市區 */}
                <optgroup label="📍 南投市區門市 (復興/民族/南陽/彰南)">
                  {DEFAULT_STORES.filter((s) => s.area === '南投市區').map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.branchName}) · 📞 {s.phone}
                    </option>
                  ))}
                </optgroup>

                {/* 3. 南崗工業區 */}
                <optgroup label="📍 南崗工業區外送門市 (南崗路)">
                  {DEFAULT_STORES.filter((s) => s.area === '南崗工業區').map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.branchName}) · 📞 {s.phone}
                    </option>
                  ))}
                </optgroup>

                {/* 4. 中興新村 */}
                <optgroup label="📍 中興新村生活圈門市 (光明南/南崗一)">
                  {DEFAULT_STORES.filter((s) => s.area === '中興新村').map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.branchName}) · 📞 {s.phone}
                    </option>
                  ))}
                </optgroup>

                {/* 5. 草屯商圈 */}
                <optgroup label="📍 草屯商圈門市 (太平/中正/碧山)">
                  {DEFAULT_STORES.filter((s) => s.area === '草屯商圈').map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.branchName}) · 📞 {s.phone}
                    </option>
                  ))}
                </optgroup>

                {/* 6. 其他示範門市 */}
                {DEFAULT_STORES.filter((s) => !s.area).length > 0 && (
                  <optgroup label="🍵 其他範本店家">
                    {DEFAULT_STORES.filter((s) => !s.area).map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.tagline || '示範'})
                      </option>
                    ))}
                  </optgroup>
                )}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                開團店家品牌
              </label>
              <input
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                required
                placeholder="例如：清心福全、得正、50嵐"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {/* 📍 新增：分店詳細資訊、訂購電話、南北分區定價與營業時間 */}
          <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-3.5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                特定分店資訊與定價分區 (防呆校正)
              </span>
              <span className="text-[11px] text-slate-400">
                主揪結單下單必備，避免送錯門市或算錯南北價
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* 分店名稱 */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  分店名稱 / 門市
                </label>
                <input
                  type="text"
                  value={branchName}
                  onChange={(e) => setBranchName(e.target.value)}
                  placeholder="例如：南投南陽店、信義店"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              {/* 分店電話 */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1 flex items-center gap-1">
                  <Phone className="w-3 h-3 text-slate-400" />
                  分店訂購電話
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="例如：049-2236388、02-27221234"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* 定價分區切換與營業時間 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-slate-200/60">
              {/* 定價分區 */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1 flex items-center justify-between">
                  <span>適用定價分區</span>
                  <span className="text-[10px] text-emerald-600">
                    目前：{region}
                  </span>
                </label>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleAdjustRegionPrice('中南部價')}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                      region === '中南部價'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    中南部價
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAdjustRegionPrice('北部價')}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                      region === '北部價'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    北部價 (+5)
                  </button>
                  <button
                    type="button"
                    onClick={() => setRegion('全台均一價')}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                      region === '全台均一價'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    均一價
                  </button>
                </div>
              </div>

              {/* 營業時間與營業狀態 */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <CalendarCheck className="w-3 h-3 text-slate-400" />
                    今日營業狀態
                  </span>
                  <label className="flex items-center gap-1 cursor-pointer text-[10px]">
                    <input
                      type="checkbox"
                      checked={isOpenToday}
                      onChange={(e) => setIsOpenToday(e.target.checked)}
                      className="accent-emerald-600"
                    />
                    <span>{isOpenToday ? '🟢 今日有營業' : '🔴 今日公休'}</span>
                  </label>
                </label>
                <input
                  type="text"
                  value={businessHours}
                  onChange={(e) => setBusinessHours(e.target.value)}
                  placeholder="例如：09:30 - 21:30"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* 截止時間與外送費 */}
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

          {/* 菜單檢視與微調表 */}
          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                菜單品項核對與即時微調
              </h3>
              <button
                type="button"
                onClick={handleSaveToHistory}
                className="text-xs text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-full font-bold transition-all"
              >
                💾 存入我的常用店家庫
              </button>
            </div>

            {saveStoreNotice && (
              <div className="text-xs text-emerald-700 bg-emerald-100/60 p-2 rounded-lg font-bold mb-2">
                {saveStoreNotice}
              </div>
            )}

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

          {/* 開團確認按鈕 */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            確認開團並生成雙網址
          </button>
        </form>
      </div>

      {/* 2. 開團成功派發雙網址 */}
      {createdResult && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-4 animate-in fade-in duration-300">
          <div className="flex items-center gap-2 text-emerald-800 font-bold">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            開團成功！已備妥公務群填單網址與主揪管理網址
          </div>

          <div className="space-y-3">
            {/* 公開填單網址 */}
            <div className="bg-white p-3.5 rounded-xl border border-emerald-100 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">📢 貼入 LINE 公務群組訊息 (一般同仁)</span>
                <button
                  onClick={() => {
                    const branchText = createdResult.branchName ? ` (${createdResult.branchName})` : '';
                    const regionText = createdResult.region ? `【${createdResult.region}】` : '';
                    const phoneText = createdResult.phone ? `\n📞 分店電話：${createdResult.phone}` : '';
                    copyToClipboard(
                      `🥤【辦公室訂飲料】今天喝 ${createdResult.storeName}${branchText}！${regionText}\n⏰ 截止時間：${createdResult.deadline}${phoneText}\n👉 請點選網址填單（請勿在群組+1洗版）：\n${createdResult.publicUrl}`,
                      '已複製公務群通知文字！'
                    );
                  }}
                  className="text-xs text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1"
                >
                  <Copy className="w-3.5 h-3.5" /> 一鍵複製通知
                </button>
              </div>
              <p className="text-xs text-slate-500 font-mono bg-slate-50 p-2 rounded border border-slate-100 break-all">
                🥤【辦公室訂飲料】今天喝 {createdResult.storeName}
                {createdResult.branchName && ` (${createdResult.branchName})`}！
                {createdResult.region && `【${createdResult.region}】`}<br />
                ⏰ 截止時間：{createdResult.deadline}
                {createdResult.phone && ` ｜ 📞 ${createdResult.phone}`}<br />
                👉 請點選網址填單：{createdResult.publicUrl}
              </p>
            </div>

            {/* 主揪專屬管理網址 */}
            <div className="bg-white p-3.5 rounded-xl border border-amber-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 flex items-center gap-1">
                  🔒 主揪管理網址 (私存勿外洩)
                </span>
                <button
                  onClick={() => copyToClipboard(createdResult.adminUrl, '已複製主揪管理網址！')}
                  className="text-xs text-amber-700 hover:text-amber-800 font-bold flex items-center gap-1"
                >
                  <Copy className="w-3.5 h-3.5" /> 複製管理網址
                </button>
              </div>
              <p className="text-xs text-amber-900 font-mono bg-amber-50/50 p-2 rounded border border-amber-100 break-all">
                {createdResult.adminUrl}
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

      {/* 快速輸入 Gemini API Key / Cloudflare Worker Proxy 彈窗 */}
      {showApiKeyModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 space-y-4 shadow-xl">
            <div>
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <KeyRound className="w-4 h-4 text-emerald-600" />
                Gemini 服務設定 (二擇一即可使用)
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                您可以設定 Cloudflare Worker 代理（推薦，保護金鑰且全辦公室共享快取），或直接輸入個人 Gemini API Key。
              </p>
            </div>

            <div className="space-y-3 text-xs">
              {/* 方案 B: Cloudflare Worker 代理中繼 */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1.5">
                <label className="font-bold text-slate-700 flex items-center justify-between">
                  <span>方案 B：Cloudflare Worker 代理網址 (推薦)</span>
                  <span className="text-[10px] text-emerald-600 font-normal">免填金鑰 · 共享快取</span>
                </label>
                <input
                  type="text"
                  value={tempProxyUrl}
                  onChange={(e) => setTempProxyUrl(e.target.value)}
                  placeholder="https://drink-order-proxy.your-subdomain.workers.dev/api/gemini"
                  className="w-full px-3 py-2 text-xs bg-white border rounded-lg font-mono focus:ring-2 focus:ring-emerald-500"
                />
                <span className="text-[10px] text-slate-400 block">
                  設定後前端請求將由您的 Worker 代理，API Key 隱藏於後端，完全無洩漏風險。
                </span>
              </div>

              {/* 方案 A: 個人 API Key 直連 */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1.5">
                <label className="font-bold text-slate-700 flex items-center justify-between">
                  <span>方案 A：個人 Google Gemini API Key</span>
                  <span className="text-[10px] text-slate-400 font-normal">僅保存在本機</span>
                </label>
                <input
                  type="password"
                  value={tempApiKey}
                  onChange={(e) => setTempApiKey(e.target.value)}
                  placeholder="貼上 AIzaSy..."
                  className="w-full px-3 py-2 text-xs bg-white border rounded-lg font-mono focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-1 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowApiKeyModal(false)}
                className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs"
              >
                取消
              </button>
              <button
                type="button"
                onClick={() => {
                  setGeminiApiKey(tempApiKey);
                  setWorkerProxyUrl(tempProxyUrl);
                  setShowApiKeyModal(false);
                  if (aiMode === 'text' && textOrUrlInput.trim()) {
                    handleStartTextParsing();
                  } else if (aiMode === 'image' && menuImage) {
                    handleStartImageParsing();
                  }
                }}
                className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all"
              >
                儲存並開始辨識
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
