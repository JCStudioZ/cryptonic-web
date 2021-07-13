import * as React from 'react';
import Card from 'components/Card';
import { getCryptoLogoImageURL, getLineChartOption } from 'utils';
import { Line } from 'react-chartjs-2';

type HighlightedCoinProps = {};

const chartData = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      data: [45, 52, 42, 39, 59, 47],
      fill: true,
      backgroundColor: '#ff638424',
      borderColor: 'rgb(255, 99, 132)',
      cubicInterpolationMode: 'monotone',
      tension: 0.4,
    },
  ],
};

const HighlightedCoin: React.FC<HighlightedCoinProps> = () => {
  const chartOption = getLineChartOption();

  return (
    <Card isCompact title={<p className="text-base-content-secondary mb-4 ">Top Gainer</p>}>
      <div className="flex space-x-4">
        <img src={getCryptoLogoImageURL('bitcoin-btc-logo')} className="min-w-[28px] h-7" />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">$35,212.000</p>
            <p>54.11%</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="mt-1">Bitcoin</p>
              <p className="mt-1 text-base-content-secondary">BTC</p>
            </div>
            <Line className="!h-10 !w-1/2" type="line" data={chartData} options={chartOption} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HighlightedCoin;
