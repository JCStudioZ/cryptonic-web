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

type ChartType = 'price' | 'depth';

const ExchangeChart: React.FC<ExchangeChartProps> = () => {
  const [selectedChartType, setSelectedChartType] = React.useState<ChartType>('price');
  const [selectedInterval, setSelectedInterval] = React.useState<string>('1');
  console.log('🚀 ~ file: ExchangeChart.tsx ~ line 42 ~ selectedInterval', selectedInterval);

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
      <FormSelect
        value="all"
        data={chartIntervalData}
        isGhost
        isBordered
        selectSize="small"
        onChange={onIntervalSelectChange}
      />
    );
  };

  return (
    <Card isCompact className="h-full">
      <Section titleText="BTC/USDT" titleRightElement={renderIntervalSelect()}>
        <ButtonGroup isFullWidth className="mt-6" value={selectedChartType}>
          {renderButtonGroupItem('price', 'Price')}
          {renderButtonGroupItem('depth', 'Depth')}
        </ButtonGroup>
        <TradingViewChart
          className="mt-6"
          id="exchange-trading-view"
          tradingPairSymbol={'BTCUSDT'}
          interval={selectedInterval}
        />
      </Section>
    </Card>
  );
};

export default ExchangeChart;
