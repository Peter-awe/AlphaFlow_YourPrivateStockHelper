import React from 'react';
import { MOCK_VOLATILITY } from '../constants';
import { IconActivity } from '../components/Icons';

const VolatilityHunter: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-100">Hot Picks & Opportunities</h2>
        <div className="text-sm text-slate-500">
          Scanned <span className="text-white font-mono">1,402</span> stocks
        </div>
      </div>

      {/* Strategy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-indigo-900/20 border border-indigo-500/30 p-4 rounded-xl">
          <div className="text-indigo-400 text-sm font-bold uppercase mb-1">Rising Fast</div>
          <div className="text-2xl font-bold text-white mb-2">3 Stocks</div>
          <div className="text-xs text-indigo-300">Price moving up quickly with high volume.</div>
        </div>
        <div className="bg-emerald-900/20 border border-emerald-500/30 p-4 rounded-xl">
          <div className="text-emerald-400 text-sm font-bold uppercase mb-1">Potential Bounce</div>
          <div className="text-2xl font-bold text-white mb-2">1 Stock</div>
          <div className="text-xs text-emerald-300">Price dropped too much, might recover.</div>
        </div>
        <div className="bg-rose-900/20 border border-rose-500/30 p-4 rounded-xl">
          <div className="text-rose-400 text-sm font-bold uppercase mb-1">High Risk</div>
          <div className="text-2xl font-bold text-white mb-2">Market Volatile</div>
          <div className="text-xs text-rose-300">Be careful with new trades.</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-800">
             <h3 className="text-lg font-semibold text-slate-200">Active Signals</h3>
          </div>
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-slate-950 text-slate-500 font-medium uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Stock</th>
                <th className="px-6 py-3">Current Price</th>
                <th className="px-6 py-3">Volatility</th>
                <th className="px-6 py-3">Pattern</th>
                <th className="px-6 py-3 text-right">Trend Strength</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {MOCK_VOLATILITY.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-white flex items-center">
                    <span className="w-2 h-2 rounded-full mr-2 bg-slate-500"></span>
                    {item.ticker}
                  </td>
                  <td className="px-6 py-4 font-mono">${item.price.toFixed(2)}</td>
                  <td className="px-6 py-4">{item.beta > 2 ? 'High' : item.beta > 1 ? 'Medium' : 'Low'}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold 
                      ${item.signal === 'Breakout' ? 'bg-indigo-600 text-white' : 
                        item.signal === 'Reversal' ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300'}`}>
                      {item.signal === 'Breakout' ? 'Rising Fast' : item.signal === 'Reversal' ? 'Bounce' : item.signal}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end">
                      <span className="mr-2 font-mono text-xs">{item.trendStrength}%</span>
                      <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-indigo-500" 
                          style={{ width: `${item.trendStrength}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Live Chart Placeholder */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col">
          <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center">
            <IconActivity className="w-5 h-5 mr-2 text-indigo-400" />
            Live Scanner
          </h3>
          <div className="flex-1 bg-slate-950 rounded-lg border border-slate-800 relative overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-slate-950 to-slate-950"></div>
             <p className="text-slate-600 text-sm z-10 text-center px-4">Click a stock on the left to see simplified chart.</p>
             {/* Simple CSS Pulse Animation for effect */}
             <div className="absolute w-24 h-24 bg-indigo-500/10 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolatilityHunter;