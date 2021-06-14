import Card from 'components/Card';
import * as React from 'react';
import BalanceSummary from './BalanceSummary';

type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <Card isCompact>
          <div className="grid grid-cols-2">
            <BalanceSummary />
            <div></div>
          </div>
        </Card>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
