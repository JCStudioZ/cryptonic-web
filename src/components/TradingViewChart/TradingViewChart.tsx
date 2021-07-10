import * as React from 'react';
import Helmet from 'react-helmet';
import ThemeConText from 'context/theme';

type TradingViewChartProps = {
  tradingPairSymbol: string;
  interval?: string;
  marketName?: string;
  width?: string;
  height?: string;
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
  type = ChartType.PRICE,
  ...rest
}) => {
  const { theme } = React.useContext(ThemeConText);
  const [chartTheme, setChartTheme] = React.useState('light');

  React.useEffect(() => {
    switch (theme) {
      case 'dark':
        setChartTheme('dark');
        break;
      case 'black':
        setChartTheme('dark');
        break;
      case 'cyberpunk':
        setChartTheme('dark');
        break;
      case 'forest':
        setChartTheme('dark');
        break;
      case 'halloween':
        setChartTheme('dark');
        break;
      case 'luxury':
        setChartTheme('dark');
        break;
      case 'dracula':
        setChartTheme('dark');
        break;
      case 'synthwave':
        setChartTheme('dark');
        break;
      default:
        setChartTheme('light');
        break;
    }
  }, [theme]);

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
                "theme": "${chartTheme}",
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
