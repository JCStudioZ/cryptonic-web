import * as faker from 'faker';
import { Balance, Coin, PopularCoinInfo, Transaction, Wallet } from 'types';

const btc: Coin = {
  code: 'BTC',
  imageName: 'bitcoin-btc-logo',
  name: 'Bitcoin',
  price: faker.datatype.number({
    min: 10000,
    max: 60000,
  }),
};

const ltc: Coin = {
  code: 'LTC',
  imageName: 'litecoin-ltc-logo',
  name: 'Litecoin',
  price: faker.datatype.number({
    min: 50,
    max: 500,
  }),
};

const eth: Coin = {
  code: 'ETH',
  imageName: 'ethereum-eth-logo',
  name: 'Ethereum',
  price: faker.datatype.number({
    min: 10000,
    max: 60000,
  }),
};

const ada: Coin = {
  code: 'ADA',
  imageName: 'cardano-ada-logo',
  name: 'Cardano',
  price: faker.datatype.number({
    min: 10000,
    max: 60000,
  }),
};

const monero: Coin = {
  code: 'ADA',
  imageName: 'monero-xmr-logo',
  name: 'Monero',
  price: faker.datatype.number({
    min: 10000,
    max: 60000,
  }),
};

const pancakeswap: Coin = {
  code: 'CAKE',
  imageName: 'pancakeswap-cake-logo',
  name: 'PancakeSwap',
  price: faker.datatype.number({
    min: 10000,
    max: 60000,
  }),
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

export const fetchPopularCoinList = (): Promise<PopularCoinInfo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          coin: btc,
          percentage: faker.datatype.number({
            min: -50,
            max: 90,
          }),
          chartData: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
              {
                data: [12, 19, 3, 8, 4, 15],
                fill: true,
                backgroundColor: '#ff638424',
                borderColor: 'rgb(255, 99, 132)',
                cubicInterpolationMode: 'monotone',
                tension: 0.4,
              },
            ],
          },
        },
        {
          coin: eth,
          percentage: faker.datatype.number({
            min: -50,
            max: 90,
          }),
          chartData: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
              {
                data: [3, 9, 16, 5, 25, 30],
                fill: true,
                backgroundColor: '#ff638424',
                borderColor: 'rgb(255, 99, 132)',
                cubicInterpolationMode: 'monotone',
                tension: 0.4,
              },
            ],
          },
        },
        {
          coin: ltc,
          percentage: faker.datatype.number({
            min: -50,
            max: 90,
          }),
          chartData: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
              {
                data: [12, 19, 40, 34, 45, 60],
                fill: true,
                backgroundColor: '#ff638424',
                borderColor: 'rgb(255, 99, 132)',
                cubicInterpolationMode: 'monotone',
                tension: 0.4,
              },
            ],
          },
        },
        {
          coin: ada,
          percentage: faker.datatype.number({
            min: -50,
            max: 90,
          }),
          chartData: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
              {
                data: [20, 19, 3, 10, 2, 9],
                fill: true,
                backgroundColor: '#ff638424',
                borderColor: 'rgb(255, 99, 132)',
                cubicInterpolationMode: 'monotone',
                tension: 0.4,
              },
            ],
          },
        },
        {
          coin: monero,
          percentage: faker.datatype.number({
            min: -50,
            max: 90,
          }),
          chartData: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
              {
                data: [20, 47, 42, 45, 59, 52],
                fill: true,
                backgroundColor: '#ff638424',
                borderColor: 'rgb(255, 99, 132)',
                cubicInterpolationMode: 'monotone',
                tension: 0.4,
              },
            ],
          },
        },
        {
          coin: pancakeswap,
          percentage: faker.datatype.number({
            min: -50,
            max: 90,
          }),
          chartData: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
              {
                data: [45, 52, 42, 39, 59, 47],
                fill: true,
                backgroundColor: '#ff638424',
                borderColor: 'rgb(255, 99, 132)',
                cubicInterpolationMode: 'monotone',
                tension: 0.4,
              },
            ],
          },
        },
      ]);
    }, 200);
  });
};
