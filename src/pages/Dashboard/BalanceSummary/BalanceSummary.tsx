import * as React from 'react';
import { ArrowUp } from 'react-feather';

type BalanceSummaryProps = {};

const BalanceSummary: React.FC<BalanceSummaryProps> = () => {
  return (
    <div className="flex">
      <div className="flex flex-1 justify-between">
        <p className="font-bold">Balance</p>
        <p className="text-success font-bold">
          <ArrowUp className="inline-block align-top" size="20" /> 2.36%
        </p>
      </div>
    </div>
  );
};

export default BalanceSummary;
