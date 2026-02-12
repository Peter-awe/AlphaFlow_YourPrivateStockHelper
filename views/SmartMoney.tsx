import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid } from 'recharts';
import { MOCK_SMART_MONEY, MOCK_WHALES } from '../constants';

const SmartMoney: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-100">主力资金 & 板块流向</h2>
        <div className="flex space-x-2">
           <button className="px-3 py-1 bg-slate-800 text-xs text-slate-300 rounded border border-slate-700 hover:bg-slate-700">1 小时</button>
           <button className="px-3 py-1 bg-indigo-600 text-xs text-white rounded border border-indigo-500">今日</button>
           <button className="px-3 py-1 bg-slate-800 text-xs text-slate-300 rounded border border-slate-700 hover:bg-slate-700">5 日</button>
        </div>
      </div>

      {/* Main Flow Chart */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-slate-200 mb-2">钱都去哪了？(板块净流入/流出)</h3>
        <p className="text-xs text-slate-500 mb-6">绿色代表主力资金正在买入 (亿元)，红色代表主力正在卖出。</p>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={MOCK_SMART_MONEY}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="sector" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                cursor={{fill: '#1e293b'}}
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f1f5f9' }}
                formatter={(value: any) => [`${value} 亿`, '净流入']}
              />
              <Bar dataKey="netInflow" radius={[4, 4, 0, 0]}>
                {MOCK_SMART_MONEY.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.netInflow > 0 ? '#10b981' : '#f43f5e'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Unusual Whales Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-800">
          <h3 className="text-lg font-semibold text-slate-200">主力大单监控 (超级盘口)</h3>
          <p className="text-xs text-slate-500 mt-1">捕捉机构、北向资金和顶级游资的异常交易行为。</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-slate-950 text-slate-500 font-medium uppercase text-xs">
              <tr>
                <th className="px-6 py-3">股票名称</th>
                <th className="px-6 py-3">交易性质</th>
                <th className="px-6 py-3">触发位置</th>
                <th className="px-6 py-3">异动原因</th>
                <th className="px-6 py-3 text-right">成交金额</th>
                <th className="px-6 py-3 text-right">多空信号</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {MOCK_WHALES.map((whale, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-white">{whale.ticker}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${whale.type === 'CALL' ? 'bg-emerald-900/20 text-emerald-400 border border-emerald-500/20' : 'bg-rose-900/20 text-rose-400 border border-rose-500/20'}`}>
                      {whale.type === 'CALL' ? '主力买入' : '主力卖出'}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono">¥{whale.strike}</td>
                  <td className="px-6 py-4 text-slate-500">{whale.exp}</td>
                  <td className="px-6 py-4 text-right font-mono text-slate-200">
                    {(whale.premium / 100000000).toFixed(2)} 亿
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={whale.sentiment === 'Bullish' ? 'text-emerald-400' : 'text-rose-400'}>
                      {whale.sentiment === 'Bullish' ? '看多' : '看空'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SmartMoney;