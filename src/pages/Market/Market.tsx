import * as React from 'react';

type MarketProps = {};

const Market: React.FC<MarketProps> = () => {
  return (
    <div className="grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-4">
      <p>Market page</p>
    </div>
  );
};

export default Market;
