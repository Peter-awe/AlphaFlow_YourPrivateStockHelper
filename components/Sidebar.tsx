import React from 'react';
import { IconDashboard, IconGlobe, IconTrendingUp, IconActivity, IconBrain } from './Icons';

interface SidebarProps {
  currentView: string;
  onChangeView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Overview', icon: IconDashboard }, // Was Dashboard
    { id: 'macro', label: 'Global News', icon: IconGlobe }, // Was Macro Sentinel
    { id: 'smartmoney', label: 'Money Flow', icon: IconTrendingUp }, // Was Smart Money
    { id: 'volatility', label: 'Hot Picks', icon: IconActivity }, // Was Volatility Hunter
    { id: 'insight', label: 'AI Tutor', icon: IconBrain }, // Was AlphaFlow AI
  ];

  return (
    <aside className="w-64 h-screen bg-slate-900 border-r border-slate-800 flex flex-col fixed left-0 top-0 z-50">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mr-3 flex items-center justify-center font-bold text-white text-xl">A</div>
        <h1 className="text-xl font-bold tracking-tight text-slate-100">AlphaFlow</h1>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id)}
              className={`w-full flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                isActive 
                  ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-950 rounded-lg p-3 border border-slate-800">
          <p className="text-xs text-slate-500 uppercase font-bold mb-1">Status</p>
          <div className="flex items-center text-xs text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            Online
          </div>
          <p className="text-xs text-slate-500 mt-2">Personal Edition</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;