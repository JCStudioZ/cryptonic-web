import Section from 'components/Section';
import Skeleton from 'components/Skeleton';
import { useQueryBalance } from 'hooks/queries';
import * as React from 'react';
import { ArrowDown, ArrowUp } from 'react-feather';
import { formatCurrency } from 'utils';

type BalanceSummaryProps = {};

const BalanceSummary: React.FC<BalanceSummaryProps> = () => {
  const { data, isLoading } = useQueryBalance();
  const percentage = data?.percentage;
  const balance = data?.balance || 0;
  const income = data?.income || 0;
  const expenses = data?.expenses || 0;

  const renderBalancePercentage = () => {
    if (!percentage) {
      return;
    }

    return (
      <p className="text-success text-base font-bold">
        <ArrowUp className="inline-block align-text-bottom" size="22" /> {percentage}%
      </p>
    );
  };

  return (
    <Section titleText="Balance" titleRightElement={renderBalancePercentage()}>
      <div className="mt-4 min-h-[130px] md:mt-6">
        <Skeleton className="w-full" isLoading={isLoading}>
          <h2 className="text-4xl font-bold truncate">{formatCurrency(balance)}</h2>
          <div className="mt-4 md:mt-14">
            <div className="grid grid-cols-2 divide-x divide-base-content-secondary">
              <div className="px-2">
                <p className="text-base text-center text-base-content-secondary">
                  <ArrowDown className="inline-block align-text-bottom text-success" size="22" /> Income
                </p>
                <h3 className="text-xl font-bold mt-4 md:mt-4 text-center truncate">{formatCurrency(income)}</h3>
              </div>
              <div className="px-2">
                <p className="text-base text-center text-base-content-secondary">
                  <ArrowUp className="inline-block align-text-bottom text-error" size="22" /> Expenses
                </p>
                <h3 className="text-xl font-bold mt-4 md:mt-4 text-center truncate">{formatCurrency(expenses)}</h3>
              </div>
            </div>
          </div>
        </Skeleton>
      </div>
    </Section>
  );
};

export default BalanceSummary;
