import * as React from 'react';
import { getCryptoLogoImageURL, getLineChartOption } from 'utils';
import { ArrowUp } from 'react-feather';
import CarouselCardItem from './CarouselCardItem';
import { Line } from 'react-chartjs-2';

type GeneralnformationProps = {};

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

const Generalnformation: React.FC<GeneralnformationProps> = () => {
  const chartOption = getLineChartOption();

  return (
    <div className="carousel carousel-center pb-2 overflow-x-auto">
      <CarouselCardItem
        title="Bitcon"
        content="BTC/USDT"
        leftElement={<img src={getCryptoLogoImageURL('bitcoin-btc-logo')} width={28} height={28} className="mr-4" />}
      />
      <CarouselCardItem
        title="24h Change"
        content={
          <p className="font-bold text-success text-xl mt-1">
            <ArrowUp className="inline-block align-text-top" />
            0.53%
          </p>
        }
        contentContainerClass="flex-1"
        rightElement={
          <div className="flex-1">
            <Line className="!h-10" type="line" data={chartData} options={chartOption} />
          </div>
        }
      />
      <CarouselCardItem title="Last Price" content="35,154,991 USD" />
      <CarouselCardItem title="24h Low" content="34,193,122 USD" />
    </div>
  );
};

export default Generalnformation;
