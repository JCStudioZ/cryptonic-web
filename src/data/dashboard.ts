import * as faker from 'faker';
import { Balance } from 'types';

export type FetchBalanceResponse = Balance | null;

export const fetchBalance = (): Promise<FetchBalanceResponse> => {
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
    }, 1000);
  });
};
