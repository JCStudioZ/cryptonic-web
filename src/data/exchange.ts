import dayjs from 'dayjs';
import faker from 'faker';
import { MarketTrade, TradingPair } from 'types';

export const fetchTradingPairDetails = (): Promise<TradingPair> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'BTC-USDT',
        code: 'BTCUSDT',
        change24h: faker.datatype.number(100),
        low24h: faker.datatype.number(100),
        price: faker.datatype.number({
          min: 10000,
          max: 100000,
        }),
        lastPrice: faker.datatype.number({
          min: 10000,
          max: 100000,
        }),
        open: faker.datatype.number({
          min: 10000,
          max: 100000,
        }),
        high: faker.datatype.number({
          min: 10000,
          max: 100000,
        }),
        low: faker.datatype.number({
          min: 10000,
          max: 100000,
        }),
        close: faker.datatype.number({
          min: 10000,
          max: 100000,
        }),
        primaryCoin: {
          code: 'BTC',
          imageName: 'bitcoin-btc-logo',
          name: 'Bitcoin',
          price: faker.datatype.number({
            min: 10000,
            max: 60000,
          }),
        },
        marketTrades: Array(10)
          .fill(0)
          .map((): MarketTrade => {
            return {
              id: faker.datatype.uuid(),
              time: dayjs(faker.date.recent()).format('DD/MM/YYYY HH:mm:ss'),
              price: 24521.2515,
              amount: 64586.4789,
              total: 13251.9693,
            };
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
      });
    }, 200);
  });
};
