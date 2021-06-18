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
