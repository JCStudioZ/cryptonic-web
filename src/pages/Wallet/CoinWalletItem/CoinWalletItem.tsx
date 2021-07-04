import * as React from 'react';
import cn from 'classnames';
import Card from 'components/Card';
import { formatCurrency, getLineChartOption } from 'utils';
import { Line } from 'react-chartjs-2';

type CoinWalletItemProps = {
  coinName: string;
  coinLogoUrl: string;
  percentage: number;
  amount: number;
  balance: number;
};

const chartOption = getLineChartOption();

const chartData = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      data: [12, 19, 3, 8, 4, 15],
      fill: true,
      backgroundColor: '#ff638424',
      borderColor: 'rgb(255, 99, 132)',
      cubicInterpolationMode: 'monotone',
      tension: 0.4,
    },
  ],
};

const CoinWalletItem: React.FC<CoinWalletItemProps> = ({ coinName, amount, balance, coinLogoUrl, percentage }) => {
  const percentageClass = cn({
    'text-base-content': true,
    'font-bold': true,
    'text-success': percentage > 0,
    'text-error': percentage < 0,
  });

  return (
    <Card isCompact className="carousel-item mr-4 w-3/4 last:mr-0 xl:flex-1">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={coinLogoUrl} className="mr-2 w-7 h-7" />
          <p>{coinName}</p>
        </div>
        <p className={percentageClass}>{percentage}%</p>
      </div>
      <p className="text-base-content font-bold text-2xl mt-2">{amount}</p>
      <p className="text-base-content-secondary text-sm mt-2">{formatCurrency(balance)}</p>
      <div className="mt-2">
        <Line className="!h-14" type="line" data={chartData} options={chartOption} />
      </div>
    </Card>
  );
};

export default CoinWalletItem;
