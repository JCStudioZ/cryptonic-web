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

export interface WalletCoin {
  coin: Coin;
  percentage: number;
}
