import { PercentRate } from 'components/RateText';
import * as React from 'react';
import HighlightedCoin from './HighlightedCoin';

type MarketProps = {};

const Market: React.FC<MarketProps> = () => {
  return (
    <div className="grid gap-4">
      <p className="text-base-content-secondary">In the past 24 hours</p>
      <div className="flex text-xl font-bold">
        <span className="mr-2">Market is down</span>
        <PercentRate value={-20} size="xl" />
      </div>
      <div className="space-y-4">
        <HighlightedCoin />
        <HighlightedCoin />
        <HighlightedCoin />
        <HighlightedCoin />
      </div>
    </div>
  );
};

export default Market;
