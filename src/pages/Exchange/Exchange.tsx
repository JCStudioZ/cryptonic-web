import * as React from 'react';
import ExchangeChart from './ExchangeChart';
import Generalnformation from './Generalnformation';

type ExchangeProps = {};

const Exchange: React.FC<ExchangeProps> = () => {
  return (
    <div className="grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-4">
      <div className="grid grid-flow-row auto-rows-max gap-6 md:col-span-3">
        <Generalnformation />
        <div className="h-[600px]">
          <ExchangeChart />
        </div>
      </div>
      <div>
        <p>Exchange Form</p>
      </div>
    </div>
  );
};

export default Exchange;
