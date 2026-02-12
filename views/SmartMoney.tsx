import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid } from 'recharts';
import { MOCK_SMART_MONEY, MOCK_WHALES } from '../constants';

const SmartMoney: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-100">Money Flow Tracker</h2>
        <div className="flex space-x-2">
           <button className="px-3 py-1 bg-slate-800 text-xs text-slate-300 rounded border border-slate-700 hover:bg-slate-700">1 Hour</button>
           <button className="px-3 py-1 bg-indigo-600 text-xs text-white rounded border border-indigo-500">1 Day</button>
           <button className="px-3 py-1 bg-slate-800 text-xs text-slate-300 rounded border border-slate-700 hover:bg-slate-700">1 Week</button>
        </div>
      </div>

      {/* Main Flow Chart */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-slate-200 mb-2">Which sectors are attracting money?</h3>
        <p className="text-xs text-slate-500 mb-6">Green bars mean money is entering the sector (buying). Red means money is leaving (selling).</p>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={MOCK_SMART_MONEY}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="sector" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                cursor={{fill: '#1e293b'}}
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f1f5f9' }}
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
          <h3 className="text-lg font-semibold text-slate-200">Big Investor Bets ("Whales")</h3>
          <p className="text-xs text-slate-500 mt-1">These are large transactions by institutions. "Call" usually means they bet price will go UP. "Put" means they bet DOWN.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-slate-950 text-slate-500 font-medium uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Stock</th>
                <th className="px-6 py-3">Bet Direction</th>
                <th className="px-6 py-3">Target Price</th>
                <th className="px-6 py-3">Deadline</th>
                <th className="px-6 py-3 text-right">Bet Size</th>
                <th className="px-6 py-3 text-right">View</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {MOCK_WHALES.map((whale, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-white">{whale.ticker}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${whale.type === 'CALL' ? 'bg-emerald-900/20 text-emerald-400 border border-emerald-500/20' : 'bg-rose-900/20 text-rose-400 border border-rose-500/20'}`}>
                      {whale.type === 'CALL' ? 'CALL (Up)' : 'PUT (Down)'}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono">${whale.strike}</td>
                  <td className="px-6 py-4 text-slate-500">{whale.exp}</td>
                  <td className="px-6 py-4 text-right font-mono text-slate-200">
                    ${(whale.premium / 1000000).toFixed(2)}M
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={whale.sentiment === 'Bullish' ? 'text-emerald-400' : 'text-rose-400'}>
                      {whale.sentiment}
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