import Card from 'components/Card';
import * as React from 'react';
import BalanceSummary from './BalanceSummary';
import Transactions from './Transactions';
import WalletSummary from './WalletSummary';

type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <Card isCompact>
          <div className="grid grid-cols-2 divide-x divide-base-content divide-opacity-40">
            <div className="xl:pr-11 md:pr-5">
              <BalanceSummary />
            </div>
            <div className="xl:pl-11 md:pl-5">
              <WalletSummary />
            </div>
          </div>
        </Card>
      </div>
      <div>
        <Transactions />
      </div>
    </div>
  );
};

export default Dashboard;
