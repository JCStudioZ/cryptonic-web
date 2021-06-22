import * as React from 'react';
import Helmet from 'react-helmet';
import Card from 'components/Card';
import Section from 'components/Section';
import FormSelect from 'components/FormSelect';
import ButtonGroup from 'components/ButtonGroup';

type ExchangeChartProps = {
  // interval: 1
};

const selectData = [
  {
    value: '1m',
    label: '1m',
  },
  {
    value: '30m',
    label: '30m',
  },
  {
    value: '1h',
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

  const onChartTypeButtonClick = (type: ChartType) => {
    return () => {
      setSelectedChartType(type);
    };
  };

  const renderButtonGroupItem = (type: ChartType, buttonText: string) => {
    return (
      <ButtonGroup.Item
        className="w-1/2"
        size="small"
        isActive={selectedChartType === type}
        onClick={onChartTypeButtonClick(type)}
      >
        {buttonText}
      </ButtonGroup.Item>
    );
  };

  return (
    <Card isCompact className="h-full">
      <Section
        titleText="BTC/USDT"
        titleRightElement={<FormSelect value="all" data={selectData} isGhost isBordered selectSize="small" />}
      >
        <ButtonGroup isFullWidth className="mt-6">
          {renderButtonGroupItem('price', 'Price')}
          {renderButtonGroupItem('depth', 'Depth')}
        </ButtonGroup>
        <div className="mt-6" id="exchange-trading-view"></div>
        <Helmet>
          <script type="text/javascript">{`
            new TradingView.widget(
              {
                "width": "100%",
                "height": "100%",
                "symbol": "BINANCE:BTCUSDT",
                "interval": "1",
                "timezone": "Etc/UTC",
                "theme": "dark",
                "style": "1",
                "locale": "en",
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "allow_symbol_change": true,
                "container_id": "exchange-trading-view"
              }
            );
        `}</script>
        </Helmet>
      </Section>
    </Card>
  );
};

export default ExchangeChart;
