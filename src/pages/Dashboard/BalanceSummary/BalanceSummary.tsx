import Section from 'components/Section';
import * as React from 'react';
import { ArrowDown, ArrowUp } from 'react-feather';

type BalanceSummaryProps = {};

const BalanceSummary: React.FC<BalanceSummaryProps> = () => {
  const renderBalancePercentage = () => {
    return (
      <p className="text-success text-base font-bold">
        <ArrowUp className="inline-block align-text-bottom" size="22" /> 2.36%
      </p>
    );
  };

  return (
    <Section titleText="Balance" titleRightElement={renderBalancePercentage()}>
      <h2 className="text-4xl font-bold mt-4 md:mt-6 truncate">USD 12.243,55</h2>
      <div className="mt-4 md:mt-14">
        <div className="grid grid-cols-2 divide-x divide-base-content-secondary">
          <div className="px-2">
            <p className="text-base text-center text-base-content-secondary">
              <ArrowDown className="inline-block align-text-bottom text-success" size="22" /> Income
            </p>
            <h3 className="text-xl font-bold mt-4 md:mt-4 text-center truncate">USD 1,243,989</h3>
          </div>
          <div className="px-2">
            <p className="text-base text-center text-base-content-secondary">
              <ArrowUp className="inline-block align-text-bottom text-error" size="22" /> Expenses
            </p>
            <h3 className="text-xl font-bold mt-4 md:mt-4 text-center truncate">USD 2,425,534</h3>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BalanceSummary;
