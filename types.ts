export interface MacroEvent {
  id: string;
  time: string;
  source: 'Fed' | 'PBOC' | 'Reuters' | 'Bloomberg' | 'IMF';
  title: string;
  impact: 'High' | 'Medium' | 'Low';
  sentiment: 'Hawkish' | 'Dovish' | 'Neutral' | 'Bullish' | 'Bearish';
}

export interface SmartMoneyFlow {
  time: string;
  sector: string;
  netInflow: number; // in millions
  trend: 'Inflow' | 'Outflow';
}

export interface UnusualWhaleOption {
  ticker: string;
  type: 'CALL' | 'PUT';
  strike: number;
  exp: string;
  premium: number; // total premium
  sentiment: 'Bullish' | 'Bearish';
}

export interface VolatilitySignal {
  ticker: string;
  price: number;
  beta: number;
  atr: number;
  signal: 'Breakout' | 'Reversal' | 'Consolidation';
  trendStrength: number; // 0-100
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}