import { PercentRate } from 'components/RateText';
import { ada, btc, eth, ltc, monero, pancakeswap } from 'data';
import { useQueryTradingPairDetails } from 'hooks/queries';
import * as React from 'react';
import CoinMarketTable from './CoinMarketTable';
import HighlightedCoin from './HighlightedCoin';

type MarketProps = {};

const Market: React.FC<MarketProps> = () => {
  const { data } = useQueryTradingPairDetails();
  return (
    <div className="grid grid-flow-row auto-rows-max gap-4 md:grid-cols-4">
      <div>
        <p className="text-base-content-secondary">In the past 24 hours</p>
        <div className="flex text-xl font-bold mt-1">
          <span className="mr-2">Market is down</span>
          <PercentRate value={-20} size="xl" />
        </div>
        {data && (
          <div className="space-y-4 mt-4">
            <HighlightedCoin title="Top gainer (24h)" tradingPair={data} />
            <HighlightedCoin title="New listing" tradingPair={data} />
            <HighlightedCoin title="Highest volume (24h)" tradingPair={data} />
            <HighlightedCoin title="Most visited" tradingPair={data} />
          </div>
        )}
      </div>
      <div className="overflow-x-auto md:col-span-3">
        <CoinMarketTable coinList={[btc, eth, ltc, ada, monero, pancakeswap, btc, eth, ltc, ada]} />
      </div>
    </div>
  );
};

export default Market;
