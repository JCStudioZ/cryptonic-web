import * as React from 'react';
import BalanceSummary from './BalanceSummary';

type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <div className="card bg-base-100">
          <div className="card-body">
            <div className="grid grid-cols-2">
              <BalanceSummary />
              <div className="bg-red-300">5</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-300">5</div>
    </div>
  );
};

export default Dashboard;
