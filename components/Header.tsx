import React from 'react';
import { IconBell, IconSearch } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="h-16 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex items-center w-96 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 focus-within:border-indigo-500 transition-colors">
        <IconSearch className="w-4 h-4 text-slate-500 mr-2" />
        <input 
          type="text" 
          placeholder="搜索股票代码 (如 600519)、板块或概念..." 
          className="bg-transparent border-none outline-none text-sm text-slate-200 w-full placeholder-slate-600"
        />
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex flex-col items-end">
          <span className="text-sm font-bold text-slate-200">Kiwi Pan</span>
          <span className="text-xs text-slate-500">黑钻会员</span>
        </div>
        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
          <IconBell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border border-slate-900"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border border-slate-700"></div>
      </div>
    </header>
  );
};

export default Header;