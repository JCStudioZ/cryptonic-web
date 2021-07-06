import * as React from 'react';
import Card from 'components/Card';
import Section from 'components/Section';
import FormSelect from 'components/FormSelect';
import ButtonGroup from 'components/ButtonGroup';
import { ChangeEvent } from 'react';
import TradingViewChart from 'components/TradingViewChart';

type ExchangeChartProps = {
  chartCode?: string;
};

type ChartIntervalValue = '1' | '30' | '60' | 'D';

type ChartInterval = {
  value: ChartIntervalValue;
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

const ExchangeChart: React.FC<ExchangeChartProps> = ({ chartCode }) => {
  const [selectedChartType, setSelectedChartType] = React.useState<ChartType>(ChartType.PRICE);
  const [selectedInterval, setSelectedInterval] = React.useState<ChartIntervalValue>('1');

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
    const value = event.target.value as ChartIntervalValue;
    setSelectedInterval(value);
  };

  const renderIntervalSelect = () => {
    return (
      <div className="grid grid-flow-col auto-cols-max gap-4">
        <ButtonGroup isFullWidth value={selectedChartType} className="hidden md:block w-60">
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
      <Section titleText="BTC/USDT" rightElement={renderIntervalSelect()}>
        <ButtonGroup isFullWidth className="mt-6 md:hidden" value={selectedChartType}>
          {renderButtonGroupItem(ChartType.PRICE, 'Price')}
          {renderButtonGroupItem(ChartType.DEPTH, 'Depth')}
        </ButtonGroup>
        {chartCode && (
          <div className="!h-[450px] md:!h-[350px]">
            <TradingViewChart
              className="mt-6"
              id="exchange-trading-view"
              tradingPairSymbol={chartCode}
              interval={selectedInterval}
              type={selectedChartType}
            />
          </div>
        )}
      </Section>
    </Card>
  );
};

export default ExchangeChart;
