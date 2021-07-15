import { fetchBalance, fetchPopularCoinList, fetchTransactions, fetchWalletSummary } from 'data';
import { useQuery, UseQueryResult } from 'react-query';
import { Balance, Coin, Transaction, Wallet } from 'types';

export const useQueryBalance = (): UseQueryResult<Balance> => {
  const result = useQuery<Balance>('balance', fetchBalance, {
    refetchOnWindowFocus: false,
  });
  return result;
};

export const useQueryWalletSummary = (): UseQueryResult<Wallet> => {
  const result = useQuery<Wallet>('wallet-summary', fetchWalletSummary, {
    refetchOnWindowFocus: false,
  });
  return result;
};

export const useQueryTransactions = (): UseQueryResult<Transaction[]> => {
  const result = useQuery<Transaction[]>('transactions', fetchTransactions, {
    refetchOnWindowFocus: false,
  });
  return result;
};

export const useQueryPopularCoins = (): UseQueryResult<Coin[]> => {
  const result = useQuery<Coin[]>('popular-coins', fetchPopularCoinList, {
    refetchOnWindowFocus: false,
  });
  return result;
};
