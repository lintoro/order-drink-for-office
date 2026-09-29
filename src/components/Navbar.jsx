import React, { useState } from 'react';
import { Coffee, UserCheck, ShieldCheck, PlusCircle, Settings, KeyRound, Cloud } from 'lucide-react';
import {
  getGeminiApiKey,
  setGeminiApiKey,
  getGeminiModel,
  setGeminiModel,
  SUPPORTED_MODELS,
} from '../services/geminiService';
import { getFirebaseConfig, saveFirebaseConfig } from '../services/firebaseService';

export default function Navbar({ currentView, setCurrentView, groupData }) {
  const [showSettings, setShowSettings] = useState(false);
  const [geminiModelInput, setGeminiModelInput] = useState(getGeminiModel());
  const [geminiKeyInput, setGeminiKeyInput] = useState(getGeminiApiKey());
  const [firebaseConfigInput, setFirebaseConfigInput] = useState(
    JSON.stringify(getFirebaseConfig() || {}, null, 2)
  );
  const [savedTip, setSavedTip] = useState('');

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setGeminiApiKey(geminiKeyInput);
    setGeminiModel(geminiModelInput);
    try {
      if (firebaseConfigInput.trim() && firebaseConfigInput.trim() !== '{}') {
        saveFirebaseConfig(JSON.parse(firebaseConfigInput));
      } else {
        saveFirebaseConfig(null);
      }
      setSavedTip('設定已成功儲存！');
      setTimeout(() => {
        setSavedTip('');
        setShowSettings(false);
      }, 1500);
    } catch (err) {
      alert('Firebase 設定 JSON 格式不正確，請檢查！');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentView('order')}>
          <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-lg shadow-sm">
            🥤
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-800 leading-tight">
              {groupData ? groupData.storeName : '辦公室訂飲料'}
            </h1>
            <p className="text-[11px] text-slate-500">DrinkOrder Helper</p>
          </div>
        </div>

        {/* 角色與切換導覽 */}
        <div className="flex items-center gap-2">
          <nav className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-medium">
            <button
              onClick={() => setCurrentView('create')}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all ${
                currentView === 'create'
                  ? 'bg-white text-emerald-600 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">主揪</span>開團
            </button>

            <button
              onClick={() => setCurrentView('order')}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all ${
                currentView === 'order'
                  ? 'bg-white text-emerald-600 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">同事</span>點餐
            </button>

            <button
              onClick={() => setCurrentView('admin')}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-all ${
                currentView === 'admin'
                  ? 'bg-white text-emerald-600 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">主揪</span>管理
            </button>
          </nav>

          {/* 設定按鈕 (P3/P4 金鑰與雲端管理) */}
          <button
            onClick={() => setShowSettings(!showSettings)}
            title="系統連線與 AI 設定"
            className="p-1.5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 設定 Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <Settings className="w-5 h-5 text-emerald-600" />
                系統設定 (AI 辨識 & 雲端同步)
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
              {/* Gemini Model 選擇 */}
              <div>
                <label className="block font-bold text-slate-700 mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <KeyRound className="w-3.5 h-3.5 text-emerald-600" />
                    Gemini 視覺模型版本
                  </span>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                    預設最新 Flash
                  </span>
                </label>
                <select
                  value={geminiModelInput}
                  onChange={(e) => setGeminiModelInput(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-slate-800 font-medium"
                >
                  {SUPPORTED_MODELS.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Gemini Flash API Key */}
              <div>
                <label className="block font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <KeyRound className="w-3.5 h-3.5 text-emerald-600" />
                  Google Gemini API Key (用於菜單圖片辨識)
                </label>
                <input
                  type="password"
                  value={geminiKeyInput}
                  onChange={(e) => setGeminiKeyInput(e.target.value)}
                  placeholder="AIzaSy..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 font-mono text-slate-800"
                />
                <span className="text-[11px] text-slate-400 block mt-1">
                  金鑰僅加密暫存在本機 LocalStorage，絕不上傳他人伺服器。
                </span>
              </div>

              {/* Firebase Config */}
              <div>
                <label className="block font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <Cloud className="w-3.5 h-3.5 text-blue-600" />
                  Firebase Web Config (可選：啟用跨手機即時雲端同步)
                </label>
                <textarea
                  rows={4}
                  value={firebaseConfigInput}
                  onChange={(e) => setFirebaseConfigInput(e.target.value)}
                  placeholder='{ "apiKey": "...", "projectId": "..." }'
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 font-mono text-[11px] text-slate-800"
                />
                <span className="text-[11px] text-slate-400 block mt-1">
                  未填寫時，系統將自動無縫使用本機 LocalStorage 即時跨分頁模式。
                </span>
              </div>

              {savedTip && (
                <div className="bg-emerald-50 text-emerald-700 font-bold p-2 rounded-lg text-center">
                  ✓ {savedTip}
                </div>
              )}

              <div className="flex justify-end gap-2 pt-2 border-t">
                <button
                  type="button"
                  onClick={() => setShowSettings(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium rounded-xl"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm"
                >
                  儲存設定
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
