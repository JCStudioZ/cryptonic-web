import * as React from 'react';
import Helmet from 'react-helmet';

type TradingViewChartProps = {};

const TradingViewChart: React.FC<TradingViewChartProps> = () => {
  return (
    <>
      <div className="mt-6" id="dashboard-trading-view"></div>
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
                "container_id": "dashboard-trading-view"
              }
            );
        `}</script>
      </Helmet>
    </>
  );
};

export default TradingViewChart;
