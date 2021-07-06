import Section from 'components/Section';
import { useQueryWalletSummary } from 'hooks/queries';
import * as React from 'react';
import { getCryptoLogoImageURL } from 'utils';

import WalletChart from './WalletChart';
import WalletCoinItem from './WalletCoinItem';

type WalletSummaryProps = {};

const WalletSummary: React.FC<WalletSummaryProps> = () => {
  const { data } = useQueryWalletSummary();
  const chartData = data?.chartData;
  const walletCoinInfoList = data?.walletCoinInfoList || [];

  return (
    <Section
      titleText="Wallet"
      rightElement={<p className="text-base-content-secondary">{walletCoinInfoList.length} Currentcies</p>}
    >
      <div className="flex mt-8">
        <div className="w-full md:flex justify-between">
          <div className="flex justify-center w-full md:justify-start md:w-1/2">
            <WalletChart data={chartData} />
          </div>
          {walletCoinInfoList.length && (
            <div className="w-full lg:w-1/2 xl:pl-6 md:pl-2 md:w-2/3">
              {walletCoinInfoList.map((walletInfo, index) => {
                return (
                  <WalletCoinItem
                    key={index}
                    title={walletInfo.coin.name}
                    subTitle={walletInfo.coin.code}
                    imageUrl={getCryptoLogoImageURL(walletInfo.coin.imageName)}
                    percentage={walletInfo.percentage}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default WalletSummary;
