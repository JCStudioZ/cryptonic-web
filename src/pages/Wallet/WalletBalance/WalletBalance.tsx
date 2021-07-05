import Section from 'components/Section';
import * as React from 'react';

type WalletBalanceProps = {};

const WalletBalance: React.FC<WalletBalanceProps> = () => {
  return (
    <Section
      titleText="Exchange Balance"
      titleRightElement={<span className="font-bold text-error">-0.32%</span>}
      bordered
      hasPadding
    >
      <p className="font-bold mt-2">0.213123123</p>
      <p className="text-success mt-2">$3,123,123</p>
      <progress className="progress progress-accent mt-4" value="50" max="100"></progress>
    </Section>
  );
};

export default WalletBalance;
