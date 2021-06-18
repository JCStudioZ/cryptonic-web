import * as faker from 'faker';
import { Balance, Coin, Transaction, Wallet } from 'types';

const btc: Coin = {
  code: 'btc',
  imageName: 'bitcoin-btc-logo',
  name: 'Bitcoin',
};

const ltc: Coin = {
  code: 'ltc',
  imageName: 'litecoin-ltc-logo',
  name: 'Litecoin',
};

const eth: Coin = {
  code: 'eth',
  imageName: 'ethereum-eth-logo',
  name: 'Ethereum',
};

const ada: Coin = {
  code: 'ada',
  imageName: 'cardano-ada-logo',
  name: 'Cardano',
};

export const fetchBalance = (): Promise<Balance> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        balance: faker.datatype.number({
          min: 1000000,
          max: 25000000,
        }),
        expenses: faker.datatype.number({
          min: 1000,
          max: 25000000,
        }),
        income: faker.datatype.number({
          min: 1000,
          max: 25000000,
        }),
        percentage: faker.datatype.number({
          min: 10,
          max: 80,
        }),
      });
    }, 200);
  });
};

export const fetchWalletSummary = (): Promise<Wallet> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        chartData: {
          labels: ['LTC', 'ETH', 'BTC'],
          datasets: [
            {
              label: 'Wallet',
              data: [300, 50, 100],
              backgroundColor: ['#345D9D', '#8C8C8C', '#F79621'],
              hoverOffset: 4,
            },
          ],
        },
        walletCoinInfoList: [
          {
            coin: btc,
            percentage: 10,
          },
          {
            coin: ltc,
            percentage: 27,
          },
          {
            coin: eth,
            percentage: -15,
          },
        ],
      });
    }, 200);
  });
};

export const fetchTransactions = (): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          coin: btc,
          type: 'sent',
          amount: faker.datatype.number({
            min: 1000000,
            max: 50000000,
          }),
        },
        {
          coin: ltc,
          type: 'received',
          amount: faker.datatype.number({
            min: 1000000,
            max: 50000000,
          }),
        },
        {
          coin: eth,
          type: 'sent',
          amount: faker.datatype.number({
            min: 1000000,
            max: 50000000,
          }),
        },
        {
          coin: ada,
          type: 'sent',
          amount: faker.datatype.number({
            min: 1000000,
            max: 50000000,
          }),
        },
      ]);
    }, 200);
  });
};
