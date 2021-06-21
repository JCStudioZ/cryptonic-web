import * as React from 'react';
import Helmet from 'react-helmet';
import Card from 'components/Card';
import Section from 'components/Section';
import FormSelect from 'components/FormSelect';
import Button from 'components/Button';

type ExchangeChartProps = {};

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
    value: 'day',
    label: 'Day',
  },
];

const ExchangeChart: React.FC<ExchangeChartProps> = () => {
  return (
    <Card isCompact className="h-full">
      <Section
        titleText="BTC/USDT"
        titleRightElement={<FormSelect value="all" data={selectData} isGhost isBordered selectSize="small" />}
      >
        <div className="btn-group w-full mt-6">
          <Button className="w-1/2" size="small" variant="primary">
            Price
          </Button>
          <Button className="w-1/2" size="small">
            Depth
          </Button>
        </div>
        <div className="mt-6" id="exchange-trading-view"></div>
        <Helmet>
          <script type="text/javascript">{`
            new TradingView.widget(
              {
                "width": "100%",
                "height": "100%",
                "symbol": "BINANCE:BTCUSDT",
                "interval": "D",
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
