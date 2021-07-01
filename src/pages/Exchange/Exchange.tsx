import ExchangeForm from 'components/ExchangeForm';
import { useQueryTradingPairDetails } from 'hooks/queries';
import * as React from 'react';
import ExchangeChart from './ExchangeChart';
import Generalnformation from './Generalnformation';
import MarketTrades from './MarketTrades';
import TradingForm from './TradingForm';

type ExchangeProps = {};

const Exchange: React.FC<ExchangeProps> = () => {
  const { data } = useQueryTradingPairDetails();
  console.log('🚀 ~ file: Exchange.tsx ~ line 13 ~ data', data);

  return (
    <div className="grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-4">
      <div className="grid grid-flow-row auto-rows-max gap-6 md:col-span-3">
        <Generalnformation data={data} />
        <ExchangeChart />
        <MarketTrades />
      </div>
      <div className="grid grid-flow-row auto-rows-max gap-6 pt-6 md:pt-0">
        <TradingForm />
        <ExchangeForm />
      </div>
    </div>
  );
};

export default Exchange;
