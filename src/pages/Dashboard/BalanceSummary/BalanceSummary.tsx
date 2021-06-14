import * as React from 'react';

type BalanceSummaryProps = {};

const BalanceSummary: React.FC<BalanceSummaryProps> = () => {
  return (
    <div className="flex">
      <div className="flex flex-1 justify-between">
        <p>Balance</p>
        <p>2.36%</p>
      </div>
    </div>
  );
};

export default BalanceSummary;
