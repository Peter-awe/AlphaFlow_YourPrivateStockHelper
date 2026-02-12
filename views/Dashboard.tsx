import React from 'react';
import { MOCK_VOLATILITY } from '../constants';
import { IconGlobe, IconTrendingUp, IconActivity } from '../components/Icons';

const StatCard = ({ title, value, sub, color, icon: Icon, helpText }: any) => (
  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative overflow-hidden group hover:border-slate-700 transition-all">
    <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${color}`}>
      <Icon className="w-16 h-16" />
    </div>
    <div className="relative z-10">
      <div className="text-slate-500 text-sm font-medium mb-1">{title}</div>
      <div className="text-3xl font-bold text-slate-100 mb-2">{value}</div>
      <div className={`text-xs font-bold ${sub.includes('+') || sub.includes('High') || sub.includes('Growth') ? 'text-emerald-400' : 'text-indigo-400'}`}>
        {sub}
      </div>
      <div className="mt-2 text-[10px] text-slate-600">{helpText}</div>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Market Atmosphere" 
          value="Positive" 
          sub="Money Supply Growing" 
          color="text-blue-500" 
          icon={IconGlobe} 
          helpText="When global money supply grows, stocks usually go up."
        />
        <StatCard 
          title="Big Investor Money" 
          value="+$450M" 
          sub="Buying Today" 
          color="text-emerald-500" 
          icon={IconTrendingUp} 
          helpText="Net cash entering the market today."
        />
        <StatCard 
          title="Market Fear Level" 
          value="Low" 
          sub="Calm (14.20)" 
          color="text-indigo-500" 
          icon={IconActivity} 
          helpText="Low fear means a stable market environment."
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions / Summary */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-100 mb-4">Today's Checklist</h3>
          <ul className="space-y-4">
            <li className="flex items-center text-sm text-slate-400">
              <input type="checkbox" checked readOnly className="mr-3 w-4 h-4 accent-indigo-600 rounded" />
              <span className="line-through text-slate-600">Read Morning News Brief</span>
            </li>
            <li className="flex items-center text-sm text-slate-200">
              <input type="checkbox" className="mr-3 w-4 h-4 accent-indigo-600 bg-slate-800 border-slate-600 rounded" />
              <span>Check "Hot Picks" for opportunities</span>
            </li>
            <li className="flex items-center text-sm text-slate-400">
              <input type="checkbox" className="mr-3 w-4 h-4 accent-indigo-600 bg-slate-800 border-slate-600 rounded" />
              <span>Review portfolio before market close</span>
            </li>
          </ul>
        </div>

        {/* Top Movers */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-100">Top Movers</h3>
            <span className="text-xs text-indigo-400 cursor-pointer">View All</span>
          </div>
          <div className="space-y-3">
            {MOCK_VOLATILITY.slice(0, 3).map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800">
                <div className="flex items-center">
                  <span className="font-bold text-slate-200 w-16">{item.ticker}</span>
                  <span className={`text-xs px-2 py-0.5 rounded ${item.signal === 'Breakout' ? 'bg-indigo-900/50 text-indigo-400' : 'bg-slate-800 text-slate-400'}`}>
                    {item.signal === 'Breakout' ? 'Rising Fast' : item.signal === 'Reversal' ? 'Bouncing Back' : item.signal}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono text-slate-200">${item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;