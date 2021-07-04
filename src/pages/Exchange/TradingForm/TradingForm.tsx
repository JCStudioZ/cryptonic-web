import * as React from 'react';
import Section from 'components/Section';
import FormInput from 'components/FormInput';
import Button from 'components/Button';
import Card from 'components/Card';
import FormSelect from 'components/FormSelect';

type TradingFormProps = {};

const TradingForm: React.FC<TradingFormProps> = () => {
  return (
    <Card isCompact>
      <Section
        titleText="Bitcoin"
        titleRightElement={<img className="w-8 h-8" src={'https://cryptologos.cc/logos/bitcoin-btc-logo.svg'} />}
      >
        <div>
          <FormInput
            isBordered
            disabled
            defaultValue="55,233,563"
            label="Current Price"
            containerClassName="mb-3"
            addonElement={
              <Button isGhost isDisabled className="font-bold btn-addon-right">
                USDT
              </Button>
            }
            placeholder="Price"
          />
          <FormInput
            isBordered
            label="Amount"
            addonElement={
              <Button isGhost isDisabled className="font-bold btn-addon-right">
                BTC
              </Button>
            }
            containerClassName="mb-3"
            placeholder="Amount to buy"
          />
          <FormSelect
            label="Payment Method"
            isGhost
            isBordered
            data={[
              {
                label: 'Paypal',
                value: 'paypal',
              },
              {
                label: 'VISA/MASTER',
                value: 'visa-master',
              },
            ]}
          />
          <div className="grid grid-cols-2 gap-4">
            <Button variant="primary" isBlock className="mt-6">
              Buy
            </Button>
            <Button variant="error" isBlock className="mt-6">
              Sell
            </Button>
          </div>
        </div>
      </Section>
    </Card>
  );
};

export default TradingForm;
