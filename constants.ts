import { MacroEvent, SmartMoneyFlow, UnusualWhaleOption, VolatilitySignal } from './types';

// 宏观事件 - 聚焦中国央行、发改委、统计局
export const MOCK_MACRO_EVENTS: MacroEvent[] = [
  { id: '1', time: '09:20', source: '央行', title: '今日开展 1000 亿元逆回购操作', impact: 'Medium', sentiment: 'Dovish' },
  { id: '2', time: '10:00', source: '统计局', title: 'PMI 数据重回扩张区间', impact: 'High', sentiment: 'Bullish' },
  { id: '3', time: '11:30', source: '证监会', title: '加强对量化交易的监管力度', impact: 'Medium', sentiment: 'Neutral' },
  { id: '4', time: '13:15', source: '发改委', title: '大力支持新能源汽车下乡', impact: 'High', sentiment: 'Bullish' },
  { id: '5', time: '14:45', source: '财联社', title: '半导体板块午后异动拉升', impact: 'Low', sentiment: 'Bullish' },
];

// 资金流向 - 聚焦 A 股板块
export const MOCK_SMART_MONEY: SmartMoneyFlow[] = [
  { time: '09:30', sector: '酿酒行业', netInflow: 12.5, trend: 'Inflow' }, // 亿元
  { time: '10:30', sector: '房地产', netInflow: -4.2, trend: 'Outflow' },
  { time: '11:30', sector: '新能源车', netInflow: 8.8, trend: 'Inflow' },
  { time: '12:30', sector: '医疗器械', netInflow: -1.2, trend: 'Outflow' },
  { time: '13:30', sector: '半导体', netInflow: 3.4, trend: 'Inflow' },
];

// 大单/主力异动 - 聚焦 A 股龙头
export const MOCK_WHALES: UnusualWhaleOption[] = [
  { ticker: '600519 贵州茅台', type: 'CALL', strike: 1800, exp: '主力抢筹', premium: 500000000, sentiment: 'Bullish' },
  { ticker: '300750 宁德时代', type: 'PUT', strike: 160, exp: '机构抛售', premium: 200000000, sentiment: 'Bearish' },
  { ticker: '601138 工业富联', type: 'CALL', strike: 25, exp: '北向买入', premium: 150000000, sentiment: 'Bullish' },
  { ticker: '002594 比亚迪', type: 'CALL', strike: 280, exp: '游资封板', premium: 300000000, sentiment: 'Bullish' },
];

// 实时推荐/波动信号
export const MOCK_VOLATILITY: VolatilitySignal[] = [
  { ticker: '688981 中芯国际', price: 48.20, beta: 2.4, atr: 45.5, signal: 'Breakout', trendStrength: 95 },
  { ticker: '600030 中信证券', price: 21.15, beta: 2.1, atr: 12.3, signal: 'Consolidation', trendStrength: 60 },
  { ticker: '000625 长安汽车', price: 14.40, beta: 3.5, atr: 2.1, signal: 'Reversal', trendStrength: 82 },
  { ticker: '300059 东方财富', price: 13.60, beta: 1.8, atr: 0.9, signal: 'Breakout', trendStrength: 88 },
];

export const SYSTEM_PROMPT = `你现在是 AlphaFlow，一位专为中国股民服务的 A 股智能投资顾问。
你的用户是非专业的普通散户，请使用通俗易懂的中文进行交流。
- 你的目标：帮助用户看懂 A 股市场的主力资金动向、政策风口和潜在机会。
- 分析逻辑：结合宏观政策（央行、证监会）、资金流向（北向资金、主力资金）和技术面。
- 术语解释：当提到“Hawkish/Dovish”时，解释为“资金面收紧/宽松”；提到“Bullish/Bearish”解释为“利好/利空”。
- 风险提示：时刻提醒股市有风险，入市需谨慎。
- 当前日期：2026年02月12日。
`;