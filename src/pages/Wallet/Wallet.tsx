import Button from 'components/Button';
import Card from 'components/Card';
import { useResponsive } from 'hooks/responsive';
import * as React from 'react';
import { formatCurrency, getCryptoLogoImageURL } from 'utils';
import AssetList from './AssetList';
import CoinWalletItem from './CoinWalletItem';
import WalletBalance from './WalletBalance';

type WalletProps = {};

const Wallet: React.FC<WalletProps> = () => {
  const { isMediumBreakPoint } = useResponsive();

  const renderActionButtons = () => {
    return (
      <div className="grid grid-cols-2 gap-4 mt-6 md:mt-8">
        <Button variant="primary" isBlock>
          Withdraw
        </Button>
        <Button isOutline isBlock>
          Deposit
        </Button>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-6">
      <div className="carousel carousel-center pb-2 overflow-x-auto md:block">
        <CoinWalletItem
          coinName="Bitcoin"
          coinLogoUrl={getCryptoLogoImageURL('bitcoin-btc-logo')}
          percentage={15.5}
          amount={0.512312311}
          balance={35230.123}
        />
        <CoinWalletItem
          coinName="Ethereum"
          coinLogoUrl={getCryptoLogoImageURL('ethereum-eth-logo')}
          percentage={30.56}
          amount={3.7182712}
          balance={4102.211}
        />
        <CoinWalletItem
          coinName="Litecoin"
          coinLogoUrl={getCryptoLogoImageURL('litecoin-ltc-logo')}
          percentage={30.56}
          amount={3.7182712}
          balance={4102.211}
        />
        <CoinWalletItem
          coinName="Cardano"
          coinLogoUrl={getCryptoLogoImageURL('cardano-ada-logo')}
          percentage={30.56}
          amount={3.7182712}
          balance={4102.211}
        />
      </div>
      <div className="grid grid-flow-row auto-rows-max gap-6 mt-6 md:col-span-3 md:mt-0">
        <Card isCompact>
          <div className="md:grid md:grid-cols-5 md:divide-x md:divide-base-200">
            <div className="md:col-span-2 md:pr-5 lg:pr-24">
              <div className="flex">
                <img className="w-7 h-7 mr-4" src={getCryptoLogoImageURL('ethereum-eth-logo')} />
                <p className="text-lg font-bold md:text-2xl">Ethereum</p>
              </div>
              <p className="text-sm text-base-content-secondary mt-4 md:mt-8">Total balance</p>
              <p className="text-xl font-bold mt-2 md:mt-4 md:text-4xl">0.2133214214</p>
              <p className="text-base-content-secondary mt-2 text-base md:text-2xl">{formatCurrency(3232.981, 3)}</p>
              {isMediumBreakPoint && renderActionButtons()}
            </div>
            <div className="md:col-span-3 md:pl-5 lg:pl-24">
              <div className="mt-6 md:mt-0">
                <WalletBalance
                  title="Exchange Balance"
                  coinAmount={0.231454311}
                  balance={2321.12321233}
                  percentage={24.412}
                />
              </div>
              <div className="mt-6 md:mt-8">
                <WalletBalance
                  title="Assets Balance"
                  coinAmount={0.231454311}
                  balance={2321.12321233}
                  percentage={24.412}
                />
              </div>
            </div>
            {!isMediumBreakPoint && renderActionButtons()}
          </div>
        </Card>
        <Card
          isCompact
          title={
            <div className="flex">
              <p className="text-lg font-bold">Assets</p>
            </div>
          }
        >
          <AssetList />
        </Card>
      </div>
    </div>
  );
};

export default Wallet;
