import Section from 'components/Section';
import * as React from 'react';
import { getCryptoLogoImageURL } from 'utils';

import WalletChart from './WalletChart';
import WalletCoinItem from './WalletCoinItem';

type WalletSummaryProps = {};

const WalletSummary: React.FC<WalletSummaryProps> = () => {
  const data = React.useMemo(() => {
    return {
      labels: ['LTC', 'ETH', 'BTC'],
      datasets: [
        {
          label: 'Wallet',
          data: [300, 50, 100],
          backgroundColor: ['#345D9D', '#8C8C8C', '#F79621'],
          hoverOffset: 4,
        },
      ],
    };
  }, []);

  return (
    <Section titleText="Wallet" titleRightElement={<p className="text-base-content text-opacity-60">3 Currentcies</p>}>
      <div className="flex mt-8">
        <div className="flex flex-1 justify-between">
          <div className="w-1/2 pr-5">
            <WalletChart data={data} />
          </div>
          <div className="w-1/2 pl-6">
            <WalletCoinItem
              title="BTC"
              subTitle="Bitcoin"
              imageUrl={getCryptoLogoImageURL('bitcoin-btc-logo')}
              percentage={24}
            />
            <WalletCoinItem
              title="ETH"
              subTitle="Ethererum"
              imageUrl={getCryptoLogoImageURL('ethereum-eth-logo')}
              percentage={24}
            />
            <WalletCoinItem
              title="LTC"
              subTitle="Litecoin"
              imageUrl={getCryptoLogoImageURL('litecoin-ltc-logo')}
              percentage={-12}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WalletSummary;
