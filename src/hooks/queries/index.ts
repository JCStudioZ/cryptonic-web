import { fetchBalance, fetchWalletSummary } from 'data';
import { useQuery, UseQueryResult } from 'react-query';
import { Balance, WalletCoin } from 'types';

export const useQueryBalance = (): UseQueryResult<Balance> => {
  const result = useQuery<Balance>('balance', fetchBalance, {
    refetchOnWindowFocus: false,
  });
  return result;
};

export const useQueryWalletSummary = (): UseQueryResult<WalletCoin[]> => {
  const result = useQuery<WalletCoin[]>('wallet-summary', fetchWalletSummary, {
    refetchOnWindowFocus: false,
  });
  return result;
};
