import { fetchBalance, fetchTransactions, fetchWalletSummary } from 'data';
import { useQuery, UseQueryResult } from 'react-query';
import { Balance, Transaction, Wallet } from 'types';

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
