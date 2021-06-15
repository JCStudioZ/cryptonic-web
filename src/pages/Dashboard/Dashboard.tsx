import Card from 'components/Card';
import * as React from 'react';
import Helmet from 'react-helmet';
import BalanceSummary from './BalanceSummary';
import ExchangeForm from './ExchangeForm';
import Transactions from './Transactions';
import WalletSummary from './WalletSummary';

type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
        <div className="md:col-span-3 lg:col-span-2 md:h-64">
          <Card isCompact className="h-full">
            <div className="grid md:grid-cols-2 divide-y md:divide-x divide-base-content-secondary md:divide-y-0">
              <div className="mb-6 md:mb-0 md:pr-5 xl:pr-11">
                <BalanceSummary />
              </div>
              <div className="pt-6 md:pt-0 md:pl-5 xl:pl-11">
                <WalletSummary />
              </div>
            </div>
          </Card>
        </div>
        <div className="h-64 col-span-3 mt-6 md:mt-0 lg:col-auto">
          <Transactions />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6">
        <div className="mt-6 mb-6 md:mb-0">
          <Card isCompact className="h-full">
            <ExchangeForm />
          </Card>
        </div>
        <div className="md:col-span-3 md:mt-6">
          <div id="tradingview_33af2"></div>
        </div>
      </div>
      <Helmet>
        <script type="text/javascript">{`
            new TradingView.widget(
              {
              "width": "100%",
              "height": 413,
              "symbol": "NASDAQ:AAPL",
              "interval": "D",
              "timezone": "Etc/UTC",
              "theme": "dark",
              "style": "1",
              "locale": "en",
              "toolbar_bg": "#f1f3f6",
              "enable_publishing": false,
              "allow_symbol_change": true,
              "container_id": "tradingview_33af2"
            }
              );
        `}</script>
      </Helmet>
    </>
  );
};

export default Dashboard;
