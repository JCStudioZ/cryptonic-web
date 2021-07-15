import * as React from 'react';
import { formatCurrency, getCryptoLogoImageURL, getLineChartOption } from 'utils';
import CarouselCardItem from './CarouselCardItem';
import { Line } from 'react-chartjs-2';
import { TradingPair } from 'types';
import { PercentRate } from 'components/RateText';

type GeneralnformationProps = {
  data?: TradingPair;
};

const chartOption = getLineChartOption();

const Generalnformation: React.FC<GeneralnformationProps> = ({ data }) => {
  const { name = '', change24h, lastPrice = 0, low24h = 0, primaryCoin, chartData } = data || {};

  return (
    <div className="carousel carousel-center pb-2 overflow-x-auto">
      <CarouselCardItem
        title={primaryCoin?.name || ''}
        content={name}
        leftElement={
          primaryCoin && (
            <img src={getCryptoLogoImageURL(primaryCoin.imageName)} width={28} height={28} className="mr-4" />
          )
        }
      />
      <CarouselCardItem
        title="24h Change"
        content={<PercentRate value={change24h || 0} arrow isBold />}
        contentContainerClass="flex-1"
        rightElement={
          chartData && (
            <div className="flex-1">
              <Line className="!h-10" type="line" data={chartData} options={chartOption} />
            </div>
          )
        }
      />
      <CarouselCardItem title="Last Price" content={formatCurrency(lastPrice)} />
      <CarouselCardItem title="24h Low" content={formatCurrency(low24h)} />
    </div>
  );
};

export default Generalnformation;
