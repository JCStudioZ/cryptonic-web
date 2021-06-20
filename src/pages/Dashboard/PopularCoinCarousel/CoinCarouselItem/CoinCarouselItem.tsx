import { ChartOptions } from 'chart.js';
import Card from 'components/Card';
import * as React from 'react';
import { Line } from 'react-chartjs-2';
import { ArrowUp, ArrowDown } from 'react-feather';
import { formatCurrency, getLineChartOption } from 'utils';

type CoinCarouselItemProps = {
  chartData: any;
  coinName: string;
  coinCode: string;
  coinImageURL: string;
  price: number;
  percentage: number;
};

const CoinCarouselItem: React.FC<CoinCarouselItemProps> = ({
  coinCode,
  chartData,
  coinName,
  percentage,
  coinImageURL,
  price,
}) => {
  const chartOption = getLineChartOption();

  return (
    <Card isCompact className="mr-3">
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-center">
          <img className="w-8 h-8 md:w-10 md:h-10" src={coinImageURL} />
          <div className="w-1/2">
            <Line className="!h-10" type="line" data={chartData} options={chartOption} />
          </div>
        </div>
        <div className="flex justify-between mt-3 items-center">
          <p className="text-base-content-secondary">{coinName}</p>
          <p className="text-base font-bold">
            {percentage < 0 ? (
              <ArrowDown className="inline-block align-text-bottom text-error" size="22" />
            ) : (
              <ArrowUp className="inline-block align-text-bottom text-success" size="22" />
            )}
            {Math.abs(percentage)}%
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
