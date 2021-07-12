import * as React from 'react';
import HighlightedCoin from './HighlightedCoin';

type MarketProps = {};

const Market: React.FC<MarketProps> = () => {
  return (
    <div className="grid gap-4">
      <div className="carousel carousel-center pb-2 overflow-x-auto">
        <HighlightedCoin />
        <HighlightedCoin />
        <HighlightedCoin />
        <HighlightedCoin />
      </div>
    </div>
  );
};

export default Market;
