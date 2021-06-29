import * as React from 'react';
import Helmet from 'react-helmet';

type TradingViewChartProps = {
  tradingPairSymbol: string;
  interval?: string;
  marketName?: string;
  width?: string;
  height?: string;
  theme?: string;
  type?: ChartType;
} & React.HTMLAttributes<HTMLDivElement>;

enum ChartType {
  PRICE = 1,
  DEPTH = 3,
}

const TradingViewChart: React.FC<TradingViewChartProps> = ({
  tradingPairSymbol,
  id,
  height = '100%',
  width = '100%',
  interval = '1',
  marketName = 'BINANCE',
  theme = 'dark',
  type = ChartType.PRICE,
  ...rest
}) => {
  return (
    <>
      <div id={id} {...rest}></div>
      <Helmet>
        <script type="text/javascript">{`
            new TradingView.widget(
              {
                "width": "${width}",
                "height": "${height}",
                "symbol": "${marketName}:${tradingPairSymbol}",
                "interval": "${interval}",
                "theme": "${theme}",
                "container_id": "${id}",
                "timezone": "Etc/UTC",
                "style": "${type}",
                "locale": "en",
                "enable_publishing": false,
                "allow_symbol_change": true
              }
            );
        `}</script>
      </Helmet>
    </>
  );
};

export default TradingViewChart;
