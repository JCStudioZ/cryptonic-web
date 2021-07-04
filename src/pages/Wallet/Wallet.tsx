import Card from 'components/Card';
import * as React from 'react';
import { formatCurrency, getCryptoLogoImageURL } from 'utils';
import CoinWalletItem from './CoinWalletItem';

type WalletProps = {};

const Wallet: React.FC<WalletProps> = () => {
  return (
    <div className="grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-4">
      <div className="carousel carousel-center pb-2 overflow-x-auto">
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
      </div>
      <div className="grid grid-flow-row auto-rows-max gap-6 mt-6 md:col-span-3">
        <Card
          isCompact
          title={
            <div className="flex">
              <img className="w-7 h-7 mr-4" src={getCryptoLogoImageURL('ethereum-eth-logo')} />
              <p className="text-lg font-bold">Ethereum</p>
            </div>
          }
        >
          <p className="text-sm text-base-content-secondary mt-4">Total balance</p>
          <p className="text-xl font-bold mt-2">0.2133214214</p>
          <p className="text-base-content-secondary mt-2 text-base">{formatCurrency(3232.981, 3)}</p>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;
