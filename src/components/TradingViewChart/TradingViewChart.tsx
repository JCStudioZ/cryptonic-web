import * as React from 'react';
import Helmet from 'react-helmet';

type TradingViewChartProps = {
  tradingPairSymbol: string;
  interval?: string;
  marketName?: string;
  width?: string;
  height?: string;
  theme?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const TradingViewChart: React.FC<TradingViewChartProps> = ({
  tradingPairSymbol,
  id,
  height = '100%',
  width = '100%',
  interval = '1',
  marketName = 'BINANCE',
  theme = 'dark',
  ...rest
}) => {
  console.log('🚀 ~ file: TradingViewChart.tsx ~ line 23 ~ id', id);
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
                "style": "1",
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
