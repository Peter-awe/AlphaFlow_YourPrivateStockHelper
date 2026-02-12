import React from 'react';
import { MOCK_MACRO_EVENTS } from '../constants';

const MacroSentinel: React.FC = () => {
  // Helper to translate jargon to plain English
  const translateSentiment = (sentiment: string) => {
    switch (sentiment) {
      case 'Hawkish': return 'Rates might rise (Caution)';
      case 'Dovish': return 'Rates might drop (Good)';
      case 'Bullish': return 'Positive News';
      case 'Bearish': return 'Negative News';
      default: return 'Neutral';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-100">Global Market News</h2>
        <span className="text-sm px-3 py-1 bg-indigo-900/30 text-indigo-400 border border-indigo-500/30 rounded-full">
          Market Mood: Moderate Risk
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-slate-200 mb-4 border-b border-slate-800 pb-2">Important Updates</h3>
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
                      {event.impact} Impact
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
            <h3 className="text-lg font-semibold text-slate-200 mb-4">Global Money Supply Trend</h3>
            <div className="relative h-48 bg-slate-950 rounded-lg border border-slate-800 p-4 flex items-center justify-center">
              {/* Mock Visualization */}
              <div className="w-full h-full flex items-end justify-between px-4 space-x-2">
                 {[40, 60, 45, 70, 55, 80, 65, 90, 75, 60, 50, 65].map((h, i) => (
                   <div key={i} className="w-full bg-indigo-600/40 hover:bg-indigo-500 transition-all rounded-t-sm" style={{ height: `${h}%` }}></div>
                 ))}
              </div>
              <div className="absolute top-4 left-4 text-xs text-slate-400">Net Liquidity (Is the central bank printing money?)</div>
            </div>
            <div className="mt-4 flex justify-between text-sm text-slate-400">
              <span>China (PBOC): <span className="text-emerald-400">Injecting Money</span></span>
              <span>USA (Fed): <span className="text-rose-400">Withdrawing Money</span></span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-slate-200 mb-2">Key Rates</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div className="text-slate-500 text-xs">US 10Y Bond Yield</div>
                <div className="text-xl font-mono text-rose-400">4.12%</div>
                <div className="text-[10px] text-slate-500 mt-1">If this goes up, stocks often go down.</div>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <div className="text-slate-500 text-xs">Fear Index (VIX)</div>
                <div className="text-xl font-mono text-emerald-400">14.20</div>
                <div className="text-[10px] text-slate-500 mt-1">Below 20 is calm. Above 30 is panic.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacroSentinel;