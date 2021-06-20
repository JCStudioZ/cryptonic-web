import * as React from 'react';
import { RefreshCcw, ArrowRight, ChevronDown } from 'react-feather';
import Section from 'components/Section';
import FormInput from 'components/FormInput';
import Button from 'components/Button';

type ExchangeFormProps = {};

const ExchangeForm: React.FC<ExchangeFormProps> = () => {
  const renderCoinDropdown = (coin: string) => {
    return (
      <Button isRounded isGhost className="px-0 btn-addon-right">
        <div className="flex px-2">
          <img width="20" height="20" src={`https://cryptologos.cc/logos/${coin}-logo.svg`} />
          <div className="flex items-center pl-2">
            <ChevronDown size="22" />
          </div>
        </div>
      </Button>
    );
  };

  return (
    <Section
      titleText="Exchange"
      titleRightElement={
        <Button isGhost size="small">
          <RefreshCcw size={22} />
        </Button>
      }
    >
      <div className="flex mt-6">
        <div className="flex h-4 items-center">
          <span className="text-base font-bold">1</span>
          <span className="ml-2 text-base-content-secondary">BTC</span>
        </div>
        <div className="flex flex-grow-0 h-4 mx-4 items-center">
          <ArrowRight size={22} />
        </div>
        <div className="flex h-4 items-center">
          <span className="text-base font-bold">35,101</span>
          <span className="ml-2 text-base-content-secondary">USD</span>
        </div>
      </div>
      <div className="mt-4">
        <FormInput
          isBordered
          label="Get"
          containerClassName="mb-3"
          addonElement={renderCoinDropdown('bitcoin-btc')}
          placeholder="Amount (BTC)"
        />
        <FormInput isBordered label="Pay" addonElement={renderCoinDropdown('tether-usdt')} placeholder="Total (USD)" />
        <Button variant="primary" isBlock className="mt-6">
          Exchange
        </Button>
      </div>
    </Section>
  );
};

export default ExchangeForm;
