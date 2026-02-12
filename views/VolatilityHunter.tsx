import React from 'react';
import { MOCK_VOLATILITY } from '../constants';
import { IconActivity } from '../components/Icons';

const VolatilityHunter: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-100 flex items-center">
             <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3"></span>
             AI 实时机会扫描
          </h2>
          <p className="text-xs text-indigo-400 mt-1">基于主力资金流向 + 政策风口的实时推荐</p>
        </div>
        <div className="text-sm text-slate-500">
          已扫描 <span className="text-white font-mono">5,321</span> 只 A 股
        </div>
      </div>

      {/* Strategy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-indigo-900/20 border border-indigo-500/30 p-4 rounded-xl">
          <div className="text-indigo-400 text-sm font-bold uppercase mb-1">主升浪模型</div>
          <div className="text-2xl font-bold text-white mb-2">3 只金股</div>
          <div className="text-xs text-indigo-300">成交量放大 + 突破压力位</div>
        </div>
        <div className="bg-emerald-900/20 border border-emerald-500/30 p-4 rounded-xl">
          <div className="text-emerald-400 text-sm font-bold uppercase mb-1">超跌反弹</div>
          <div className="text-2xl font-bold text-white mb-2">1 只潜力股</div>
          <div className="text-xs text-emerald-300">RSI 低位 + 底部背离</div>
        </div>
        <div className="bg-rose-900/20 border border-rose-500/30 p-4 rounded-xl">
          <div className="text-rose-400 text-sm font-bold uppercase mb-1">高风险预警</div>
          <div className="text-2xl font-bold text-white mb-2">避险建议</div>
          <div className="text-xs text-rose-300">短期涨幅过大，建议减仓。</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center">
             <h3 className="text-lg font-semibold text-slate-200">今日 AI 严选 (实时更新)</h3>
             <span className="text-xs bg-indigo-600 px-2 py-1 rounded text-white">每 3 秒刷新</span>
          </div>
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-slate-950 text-slate-500 font-medium uppercase text-xs">
              <tr>
                <th className="px-6 py-3">股票</th>
                <th className="px-6 py-3">现价</th>
                <th className="px-6 py-3">波动率</th>
                <th className="px-6 py-3">推荐理由</th>
                <th className="px-6 py-3 text-right">风口指数</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {MOCK_VOLATILITY.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors cursor-pointer">
                  <td className="px-6 py-4 font-bold text-white flex items-center">
                    <span className="w-2 h-2 rounded-full mr-2 bg-slate-500"></span>
                    <div>
                        <div>{item.ticker.split(' ')[1]}</div>
                        <div className="text-[10px] text-slate-500 font-normal">{item.ticker.split(' ')[0]}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-white">¥{item.price.toFixed(2)}</td>
                  <td className="px-6 py-4">{item.beta > 2 ? '高' : item.beta > 1 ? '中' : '低'}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold 
                      ${item.signal === 'Breakout' ? 'bg-indigo-600 text-white' : 
                        item.signal === 'Reversal' ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300'}`}>
                      {item.signal === 'Breakout' ? '放量突破' : item.signal === 'Reversal' ? '底部企稳' : item.signal}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end">
                      <span className="mr-2 font-mono text-xs">{item.trendStrength}</span>
                      <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-rose-500" 
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
            AI 盯盘
          </h3>
          <div className="flex-1 bg-slate-950 rounded-lg border border-slate-800 relative overflow-hidden flex items-center justify-center group">
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-slate-950 to-slate-950"></div>
             <div className="z-10 text-center">
                <p className="text-slate-400 text-sm mb-2">点击左侧股票查看</p>
                <p className="text-slate-600 text-xs">分时图 / K线图 / 主力轨迹</p>
             </div>
             {/* Simple CSS Pulse Animation for effect */}
             <div className="absolute w-32 h-32 bg-indigo-500/5 rounded-full animate-ping"></div>
          </div>
          <div className="mt-4 p-3 bg-indigo-900/10 border border-indigo-500/20 rounded-lg">
             <p className="text-xs text-indigo-300"><span className="font-bold">AlphaFlow 提示：</span> <br/>中芯国际主力资金持续流入，今日有望冲击涨停，建议重点关注。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolatilityHunter;