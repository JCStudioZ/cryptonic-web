import * as React from 'react';
import Card from 'components/Card';
import Section from 'components/Section';
import FormSelect from 'components/FormSelect';
import ButtonGroup from 'components/ButtonGroup';
import { ChangeEvent } from 'react';
import TradingViewChart from 'components/TradingViewChart';

type ExchangeChartProps = {};

type ChartInterval = {
  value: '1' | '30' | '60' | 'D';
  label: string;
};

const chartIntervalData: ChartInterval[] = [
  {
    value: '1',
    label: '1m',
  },
  {
    value: '30',
    label: '30m',
  },
  {
    value: '60',
    label: '1h',
  },
  {
    value: 'D',
    label: 'Day',
  },
];

enum ChartType {
  PRICE = 1,
  DEPTH = 3,
}

const ExchangeChart: React.FC<ExchangeChartProps> = () => {
  const [selectedChartType, setSelectedChartType] = React.useState<ChartType>(ChartType.PRICE);
  const [selectedInterval, setSelectedInterval] = React.useState<string>('1');

  const onChartTypeButtonClick = (type: ChartType) => {
    return () => {
      setSelectedChartType(type);
    };
  };

  const renderButtonGroupItem = (type: ChartType, buttonText: string) => {
    return (
      <ButtonGroup.Item selectedValue={type} className="w-1/2" size="small" onClick={onChartTypeButtonClick(type)}>
        {buttonText}
      </ButtonGroup.Item>
    );
  };

  const onIntervalSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedInterval(event.target.value);
  };

  const renderIntervalSelect = () => {
    return (
      <div className="grid grid-flow-col auto-cols-max gap-4">
        <div className="hidden xl:flex">
          <div className="grid grid-flow-col gap-4 items-center">
            <p className="text-base-content-secondary">
              Open: <span className="text-success font-bold">18432.320</span>
            </p>
            <p className="text-base-content-secondary">
              High: <span className="text-success font-bold">18432.320</span>
            </p>
            <p className="text-base-content-secondary">
              Low: <span className="text-success font-bold">18432.320</span>
            </p>
            <p className="text-base-content-secondary">
              Close: <span className="text-error font-bold">18432.320</span>
            </p>
          </div>
        </div>
        <ButtonGroup isFullWidth value={selectedChartType} className="hidden md:block w-48">
          {renderButtonGroupItem(ChartType.PRICE, 'Price')}
          {renderButtonGroupItem(ChartType.DEPTH, 'Depth')}
        </ButtonGroup>
        <FormSelect
          value="all"
          data={chartIntervalData}
          isGhost
          isBordered
          selectSize="small"
          onChange={onIntervalSelectChange}
        />
      </div>
    );
  };

  return (
    <Card isCompact>
      <Section titleText="BTC/USDT" titleRightElement={renderIntervalSelect()}>
        <ButtonGroup isFullWidth className="mt-6 md:hidden" value={selectedChartType}>
          {renderButtonGroupItem(ChartType.PRICE, 'Price')}
          {renderButtonGroupItem(ChartType.DEPTH, 'Depth')}
        </ButtonGroup>
        <div className="!h-[450px] md:!h-[350px]">
          <TradingViewChart
            className="mt-6"
            id="exchange-trading-view"
            tradingPairSymbol={'BTCUSDT'}
            interval={selectedInterval}
            type={selectedChartType}
          />
        </div>
      </Section>
    </Card>
  );
};

export default ExchangeChart;
