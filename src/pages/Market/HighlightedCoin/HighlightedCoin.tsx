import * as React from 'react';
import Card from 'components/Card';
import { formatCurrency, getCryptoLogoImageURL, getLineChartOption } from 'utils';
import { Line } from 'react-chartjs-2';
import { TradingPair } from 'types';
import { PercentRate } from 'components/RateText';

type HighlightedCoinProps = {
  title: string;
  tradingPair: TradingPair;
};

const HighlightedCoin: React.FC<HighlightedCoinProps> = ({ title, tradingPair }) => {
  const {
    lastPrice,
    primaryCoin: { name, code },
    change24h,
    chartData,
  } = tradingPair;

  return (
    <Card isCompact title={<p className="text-base-content-secondary mb-3">{title}</p>}>
      <div className="flex space-x-4">
        <img src={getCryptoLogoImageURL('bitcoin-btc-logo')} className="min-w-[28px] h-7" />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">{formatCurrency(lastPrice)}</p>
            <PercentRate value={change24h} arrow isBold />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="mt-1">{name}</p>
              <p className="mt-1 text-base-content-secondary">{code}</p>
            </div>
            <Line className="!h-10 !w-1/2" type="line" data={chartData} options={getLineChartOption()} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HighlightedCoin;
