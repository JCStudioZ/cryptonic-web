import { fetchTradingPairDetails } from 'data';
import { useQuery, UseQueryResult } from 'react-query';
import { TradingPair } from 'types';

export const useQueryTradingPairDetails = (): UseQueryResult<TradingPair> => {
  const result = useQuery<TradingPair>('exchange', fetchTradingPairDetails, {
    refetchOnWindowFocus: false,
  });
  return result;
};
