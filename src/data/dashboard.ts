import * as faker from 'faker';
import { Balance, WalletCoin } from 'types';

export const fetchBalance = (): Promise<Balance> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        balance: faker.datatype.number({
          min: 1000,
          max: 25000,
        }),
        expenses: faker.datatype.number({
          min: 1000,
          max: 25000,
        }),
        income: faker.datatype.number({
          min: 1000,
          max: 25000,
        }),
        percentage: faker.datatype.number({
          min: 10,
          max: 80,
        }),
      });
    }, 200);
  });
};

export const fetchWalletSummary = (): Promise<WalletCoin[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          coin: {
            code: 'btc',
            imageName: 'bitcoin-btc',
            name: 'Bitcoin',
          },
          percentage: 10,
        },
        {
          coin: {
            code: 'eth',
            imageName: 'ethereum-eth',
            name: 'Ethereum',
          },
          percentage: 27,
        },
        {
          coin: {
            code: 'eth',
            imageName: 'ethereumeth',
            name: 'Ethereum',
          },
          percentage: -15,
        },
      ]);
    }, 200);
  });
};
