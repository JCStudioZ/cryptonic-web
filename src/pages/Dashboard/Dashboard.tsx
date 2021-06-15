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
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 md:gap-6">
        <Card isCompact className="mt-6 mb-6 h-full md:h-96 md:mb-0 md:col-span-2 lg:col-span-2 xl:col-span-1">
          <ExchangeForm />
        </Card>
        <div className="h-[500px] md:h-96 md:col-span-2 lg:col-span-3 xl:col-span-4 md:mt-6">
          <Card title="Trading View" isCompact className="h-full">
            <div className="mt-6" id="tradingview_33af2"></div>
          </Card>
        </div>
      </div>
      <Helmet>
        <script type="text/javascript">{`
            new TradingView.widget(
              {
              "width": "100%",
              "height": "100%",
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
