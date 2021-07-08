import Section from 'components/Section';
import { useResponsive } from 'hooks/responsive';
import * as React from 'react';
import { formatCurrency } from 'utils';

type WalletBalanceProps = {
  title: string;
  percentage: number;
  coinAmount: number;
  balance: number;
};

const WalletBalance: React.FC<WalletBalanceProps> = ({ balance, coinAmount, percentage, title }) => {
  const { isMediumBreakPoint } = useResponsive();

  return (
    <Section
      titleText={title}
      titleClassName="font-medium text-base-content-secondary text-sm"
      rightElement={<span className="font-bold">{percentage}%</span>}
      bordered={!isMediumBreakPoint}
      hasPadding={!isMediumBreakPoint}
    >
      <p className="font-bold mt-2 text-base">{coinAmount}</p>
      <p className="text-success mt-2">{formatCurrency(balance)}</p>
      <progress className="progress progress-success mt-4 md:h-3" value="50" max="100"></progress>
    </Section>
  );
};

export default WalletBalance;
