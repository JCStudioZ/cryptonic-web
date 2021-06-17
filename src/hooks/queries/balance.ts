import { fetchBalance, FetchBalanceResponse } from 'data';
import { useQuery, UseQueryResult } from 'react-query';

export const useQueryBalance = (): UseQueryResult<FetchBalanceResponse> => {
  const result = useQuery<FetchBalanceResponse>('locations', fetchBalance, {
    refetchOnWindowFocus: false,
  });
  return result;
};
