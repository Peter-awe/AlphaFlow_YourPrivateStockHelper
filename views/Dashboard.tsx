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
      <div className={`text-xs font-bold ${sub.includes('+') || sub.includes('高') || sub.includes('牛') ? 'text-emerald-400' : 'text-indigo-400'}`}>
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
          title="市场情绪 (A股)" 
          value="看多" 
          sub="政策支持力度大" 
          color="text-blue-500" 
          icon={IconGlobe} 
          helpText="央行释放流动性，通常利好股市。"
        />
        <StatCard 
          title="主力资金净流入" 
          value="+4.5 亿" 
          sub="今日大举买入" 
          color="text-emerald-500" 
          icon={IconTrendingUp} 
          helpText="机构和大户今日在市场上是买方主力。"
        />
        <StatCard 
          title="市场恐慌指数" 
          value="低位" 
          sub="情绪平稳" 
          color="text-indigo-500" 
          icon={IconActivity} 
          helpText="市场情绪稳定，适合持股待涨。"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions / Summary */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-100 mb-4">今日操盘必做</h3>
          <ul className="space-y-4">
            <li className="flex items-center text-sm text-slate-400">
              <input type="checkbox" checked readOnly className="mr-3 w-4 h-4 accent-indigo-600 rounded" />
              <span className="line-through text-slate-600">阅读早盘内参 (政策利好)</span>
            </li>
            <li className="flex items-center text-sm text-slate-200">
              <input type="checkbox" className="mr-3 w-4 h-4 accent-indigo-600 bg-slate-800 border-slate-600 rounded" />
              <span>查看“机会扫描”中的今日金股</span>
            </li>
            <li className="flex items-center text-sm text-slate-400">
              <input type="checkbox" className="mr-3 w-4 h-4 accent-indigo-600 bg-slate-800 border-slate-600 rounded" />
              <span>收盘后复盘龙虎榜数据</span>
            </li>
          </ul>
        </div>

        {/* Top Movers */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-100">今日风口 / 领涨股</h3>
            <span className="text-xs text-indigo-400 cursor-pointer">查看全部</span>
          </div>
          <div className="space-y-3">
            {MOCK_VOLATILITY.slice(0, 3).map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800">
                <div className="flex items-center">
                  <span className="font-bold text-slate-200 w-24 truncate">{item.ticker.split(' ')[1]}</span>
                  <span className="text-xs text-slate-500 mr-2">{item.ticker.split(' ')[0]}</span>
                  <span className={`text-xs px-2 py-0.5 rounded ${item.signal === 'Breakout' ? 'bg-indigo-900/50 text-indigo-400' : 'bg-slate-800 text-slate-400'}`}>
                    {item.signal === 'Breakout' ? '主升浪' : item.signal === 'Reversal' ? '底部反转' : item.signal}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono text-slate-200">¥{item.price}</div>
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