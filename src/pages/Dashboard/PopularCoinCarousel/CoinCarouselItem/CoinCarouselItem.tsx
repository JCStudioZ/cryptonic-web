import { ChartOptions } from 'chart.js';
import Card from 'components/Card';
import * as React from 'react';
import { Line } from 'react-chartjs-2';
import { ArrowUp } from 'react-feather';
import { formatCurrency } from 'utils';

type CoinCarouselItemProps = {
  chartData: any;
  coinName: string;
  coinCode: string;
  coinImageURL: string;
  price: number;
  percentage: number;
};

const options: ChartOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  backgroundColor: 'red',
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
};

const CoinCarouselItem: React.FC<CoinCarouselItemProps> = ({
  coinCode,
  chartData,
  coinName,
  percentage,
  coinImageURL,
  price,
}) => {
  return (
    <Card isCompact className="mr-3">
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between">
          <img className="w-10" src={coinImageURL} />
          <div className="w-3/5">
            <Line type="line" data={chartData} options={options} />
          </div>
        </div>
        <div className="flex justify-between mt-3 items-center">
          <p className="text-base-content-secondary">{coinName}</p>
          <p className="text-base font-bold">
            <ArrowUp className="inline-block align-text-bottom text-success" size="22" />
            {percentage}%
          </p>
        </div>
        <div className="flex justify-between mt-3 items-center">
          <p className="text-xl font-bold">{formatCurrency(price)}</p>
          <p className="text-base-content-secondary">{coinCode}</p>
        </div>
      </div>
    </Card>
  );
};

export default CoinCarouselItem;
