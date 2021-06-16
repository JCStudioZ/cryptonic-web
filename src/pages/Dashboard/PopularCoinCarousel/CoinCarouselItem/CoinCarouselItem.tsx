import { ChartOptions } from 'chart.js';
import Card from 'components/Card';
import * as React from 'react';
import { Line } from 'react-chartjs-2';
import { ArrowUp } from 'react-feather';

type CoinCarouselItemProps = {};

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
      fill: true,
      backgroundColor: '#ff638424',
      borderColor: 'rgb(255, 99, 132)',
      cubicInterpolationMode: 'monotone',
      tension: 0.4,
    },
  ],
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

const CoinCarouselItem: React.FC<CoinCarouselItemProps> = () => {
  return (
    <Card isCompact className="mr-3">
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between">
          <img className="w-10" src={'https://cryptologos.cc/logos/bitcoin-btc-logo.svg'} />
          <div className="w-3/5">
            <Line type="line" data={data} options={options} />
          </div>
        </div>
        <div className="flex justify-between mt-3 items-center">
          <p className="text-base-content-secondary">Bitcoin</p>
          <p className="text-base font-bold">
            <ArrowUp className="inline-block align-text-bottom text-success" size="22" />
            2.11%
          </p>
        </div>
        <div className="flex justify-between mt-3 items-center">
          <p className="text-xl font-bold">USD 53,260.20</p>
          <p className="text-base-content-secondary">BTC</p>
        </div>
      </div>
    </Card>
  );
};

export default CoinCarouselItem;
