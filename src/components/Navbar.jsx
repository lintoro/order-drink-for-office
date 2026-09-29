import React from 'react';
import { Coffee, UserCheck, ShieldCheck, PlusCircle } from 'lucide-react';

export default function Navbar({ currentView, setCurrentView, groupData }) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
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

        {/* 角色與畫面切換器 */}
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
      </div>
    </header>
  );
}
