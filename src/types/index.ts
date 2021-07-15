export interface Balance {
  balance: number;
  percentage: number;
  income: number;
  expenses: number;
}

export interface Coin {
  code: string;
  name: string;
  imageName: string;
  price: number;
  marketCap: number;
  change24h: number;
  chartData: any;
}

export interface WalletCoinInfo {
  coin: Coin;
  percentage: number;
}

export interface Wallet {
  chartData: any;
  walletCoinInfoList: WalletCoinInfo[];
}

export type TransactionType = 'sent' | 'received';
export interface Transaction {
  coin: Coin;
  type: TransactionType;
  amount: number;
}

export interface MarketTrade {
  id: string;
  time: string;
  price: number;
  amount: number;
  total: number;
}

export interface TradingPair {
  name: string;
  code: string;
  primaryCoin: Coin;
  change24h: number;
  price: number;
  lastPrice: number;
  low24h: number;
  open: number;
  high: number;
  low: number;
  close: number;
  marketTrades: MarketTrade[];
  chartData: any;
}

export interface Asset {
  coin: Coin;
  onOrders: number;
  availableBalance: number;
  totalBalance: number;
  market24h: number;
}
