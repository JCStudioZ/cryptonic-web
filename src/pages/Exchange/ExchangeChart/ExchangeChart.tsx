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

  const onChartTypeChange = (type: ChartType) => {
    setSelectedChartType(type);
  };

  const renderButtonGroupItem = (type: ChartType, buttonText: string) => {
    return (
      <ButtonGroup.Item selectedValue={type} className="w-1/2" size="small">
        {buttonText}
      </ButtonGroup.Item>
    );
  };

  const onIntervalSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as ChartIntervalValue;
    setSelectedInterval(value);
  };

  const renderChartTypeButtonGroup = () => {
    return (
      <ButtonGroup isFullWidth value={selectedChartType} onChange={onChartTypeChange}>
        {renderButtonGroupItem(ChartType.PRICE, 'Price')}
        {renderButtonGroupItem(ChartType.DEPTH, 'Depth')}
      </ButtonGroup>
    );
  };

  const renderIntervalSelect = () => {
    return (
      <div className="grid grid-flow-col auto-cols-max gap-4">
        <div className="hidden md:block w-60">{renderChartTypeButtonGroup()}</div>
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
        <div className="mt-6 md:hidden">{renderChartTypeButtonGroup()}</div>
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
