import { MacroEvent, SmartMoneyFlow, UnusualWhaleOption, VolatilitySignal } from './types';

export const MOCK_MACRO_EVENTS: MacroEvent[] = [
  { id: '1', time: '08:30', source: 'Fed', title: 'Fed Meeting Minutes (Interest Rates)', impact: 'High', sentiment: 'Hawkish' },
  { id: '2', time: '09:00', source: 'PBOC', title: 'Central Bank Policy Update', impact: 'Medium', sentiment: 'Neutral' },
  { id: '3', time: '10:15', source: 'Reuters', title: 'Tech Sector Regulation News', impact: 'Medium', sentiment: 'Bearish' },
  { id: '4', time: '11:45', source: 'Bloomberg', title: 'Oil Supply Decreasing', impact: 'Low', sentiment: 'Bullish' },
  { id: '5', time: '13:00', source: 'IMF', title: 'Global Economic Growth Outlook', impact: 'Medium', sentiment: 'Dovish' },
];

export const MOCK_SMART_MONEY: SmartMoneyFlow[] = [
  { time: '09:30', sector: 'Technology', netInflow: 125.5, trend: 'Inflow' },
  { time: '10:30', sector: 'Healthcare', netInflow: -45.2, trend: 'Outflow' },
  { time: '11:30', sector: 'Energy', netInflow: 88.0, trend: 'Inflow' },
  { time: '12:30', sector: 'Consumer Goods', netInflow: -12.4, trend: 'Outflow' },
  { time: '13:30', sector: 'Financials', netInflow: 34.1, trend: 'Inflow' },
];

export const MOCK_WHALES: UnusualWhaleOption[] = [
  { ticker: 'NVDA', type: 'CALL', strike: 950, exp: '2026-03-20', premium: 2500000, sentiment: 'Bullish' },
  { ticker: 'TSLA', type: 'PUT', strike: 160, exp: '2026-02-28', premium: 1200000, sentiment: 'Bearish' },
  { ticker: 'AAPL', type: 'CALL', strike: 200, exp: '2026-04-15', premium: 850000, sentiment: 'Bullish' },
  { ticker: 'AMD', type: 'CALL', strike: 180, exp: '2026-03-15', premium: 3000000, sentiment: 'Bullish' },
];

export const MOCK_VOLATILITY: VolatilitySignal[] = [
  { ticker: 'SMCI', price: 890.20, beta: 2.4, atr: 45.5, signal: 'Breakout', trendStrength: 92 },
  { ticker: 'COIN', price: 240.15, beta: 2.1, atr: 12.3, signal: 'Consolidation', trendStrength: 45 },
  { ticker: 'MARA', price: 22.40, beta: 3.5, atr: 2.1, signal: 'Reversal', trendStrength: 78 },
  { ticker: 'PLTR', price: 25.60, beta: 1.8, atr: 0.9, signal: 'Breakout', trendStrength: 88 },
];

export const SYSTEM_PROMPT = `You are AlphaFlow, a friendly and helpful personal investment tutor.
Your user is not a professional trader, so avoid heavy jargon. If you must use a technical term, explain it simply.
- Your goal is to help the user understand what is happening in the market and uncover potential opportunities.
- Analyze data from the provided context (News, Money Flow, Trends).
- When asked about "Sentiment", explain if the news is Good (Bullish) or Bad (Bearish) for their wallet.
- Be encouraging but realistic about risks.
- Use emojis occasionally to keep the tone light.
- Current Date: 2026-02-12.
`;