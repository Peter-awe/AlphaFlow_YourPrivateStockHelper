import React from 'react';
import { MOCK_MACRO_EVENTS } from '../constants';

const MacroSentinel: React.FC = () => {
  // 简单的翻译助手
  const translateSentiment = (sentiment: string) => {
    switch (sentiment) {
      case 'Hawkish': return '资金收紧 (利空)';
      case 'Dovish': return '资金宽松 (利好)';
      case 'Bullish': return '重大利好';
      case 'Bearish': return '利空消息';
      default: return '中性';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-100">宏观前哨 & 政策解读</h2>
        <span className="text-sm px-3 py-1 bg-indigo-900/30 text-indigo-400 border border-indigo-500/30 rounded-full">
          当前环境: 政策底已现
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-slate-200 mb-4 border-b border-slate-800 pb-2">今日重要财经消息</h3>
          <div className="space-y-4">
            {MOCK_MACRO_EVENTS.map((event) => (
              <div key={event.id} className="flex items-start p-3 hover:bg-slate-800/50 rounded-lg transition-colors border border-transparent hover:border-slate-700">
                <div className="w-16 flex-shrink-0 text-sm font-mono text-slate-500">{event.time}</div>
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded mr-2 bg-slate-800 text-slate-400">
                      {event.source}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded
                      ${event.impact === 'High' ? 'bg-rose-900/20 text-rose-400' : 'bg-slate-800/50 text-slate-500'}`}>
                      {event.impact === 'High' ? '高' : event.impact === 'Medium' ? '中' : '低'} 影响
                    </span>
                  </div>
                  <h4 className="text-slate-200 text-sm font-medium">{event.title}</h4>
                </div>
                <div className={`text-xs font-bold px-2 py-1 rounded ml-2 text-right w-24
                  ${(event.sentiment === 'Hawkish' || event.sentiment === 'Bearish') ? 'text-rose-400' : 
                    (event.sentiment === 'Dovish' || event.sentiment === 'Bullish') ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {translateSentiment(event.sentiment)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-slate-200 mb-4">市场流动性 (央行放水了吗?)</h3>
            <div className="relative h-48 bg-slate-950 rounded-lg border border-slate-800 p-4 flex items-center justify-center">
              {/* Mock Visualization */}
              <div className="w-full h-full flex items-end justify-between px-4 space-x-2">
                 {[40, 60, 45, 70, 55, 80, 65, 90, 75, 60, 50, 65].map((h, i) => (
                   <div key={i} className="w-full bg-indigo-600/40 hover:bg-indigo-500 transition-all rounded-t-sm" style={{ height: `${h}%` }}></div>
                 ))}
              </div>
              <div className="absolute top-4 left-4 text-xs text-slate-400">市场净投放量 (亿元)</div>
            </div>
            <div className="mt-4 flex justify-between text-sm text-slate-400">
              <span>中国央行 (PBOC): <span className="text-emerald-400">净投放 +1000亿</span></span>
              <span>美联储 (Fed): <span className="text-rose-400">维持高利率</span></span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">关键指标</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div className="text-slate-500 text-xs">十年期国债收益率</div>
                <div className="text-xl font-mono text-rose-400">2.35%</div>
                <div className="text-[10px] text-slate-500 mt-1">利率下降，利好科技成长股。</div>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div className="text-slate-500 text-xs">汇率 (USD/CNY)</div>
                <div className="text-xl font-mono text-emerald-400">7.18</div>
                <div className="text-[10px] text-slate-500 mt-1">汇率企稳，外资有望回流。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacroSentinel;