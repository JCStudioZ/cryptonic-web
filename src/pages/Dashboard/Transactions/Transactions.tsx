import Card from 'components/Card';
import FormSelect from 'components/FormSelect';
import Section from 'components/Section';
import * as React from 'react';
import { ArrowUp } from 'react-feather';

type TransactionsProps = {};

const transactionFilterData = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'sent',
    label: 'Sent',
  },
  {
    value: 'received',
    label: 'Received',
  },
];

const Transactions: React.FC<TransactionsProps> = () => {
  return (
    <Card isCompact className="h-full">
      <Section
        titleText="Transaction"
        titleRightElement={
          <FormSelect value="all" data={transactionFilterData} isGhost isBordered selectSize="small" />
        }
      >
        <div className="overflow-y-auto h-full">
          <table className="table table-compact w-full mt-4">
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <img src={'https://cryptologos.cc/logos/bitcoin-btc-logo.svg'} width="32px" />
                    <div className="text-base">BTC</div>
                  </div>
                </td>
                <td className="text-center">
                  <span className="text-base text-base-content-secondary">
                    Sent <ArrowUp className="text-error inline-block align-text-bottom" size="18" />
                  </span>
                </td>
                <td className="text-right">
                  <span className="font-bold text-base">$35,201,133</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <img src={'https://cryptologos.cc/logos/bitcoin-btc-logo.svg'} width="32px" />
                    <div className="text-base">BTC</div>
                  </div>
                </td>
                <td className="text-center">
                  <span className="text-base text-base-content-secondary">
                    Sent <ArrowUp className="text-error inline-block align-text-bottom" size="18" />
                  </span>
                </td>
                <td className="text-right">
                  <span className="font-bold text-base">$35,201,133</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <img src={'https://cryptologos.cc/logos/bitcoin-btc-logo.svg'} width="32px" />
                    <div className="text-base">BTC</div>
                  </div>
                </td>
                <td className="text-center">
                  <span className="text-base text-base-content-secondary">
                    Sent <ArrowUp className="text-error inline-block align-text-bottom" size="18" />
                  </span>
                </td>
                <td className="text-right">
                  <span className="font-bold text-base">$35,201,133</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <img src={'https://cryptologos.cc/logos/bitcoin-btc-logo.svg'} width="32px" />
                    <div className="text-base">BTC</div>
                  </div>
                </td>
                <td className="text-center">
                  <span className="text-base text-base-content-secondary">
                    Sent <ArrowUp className="text-error inline-block align-text-bottom" size="18" />
                  </span>
                </td>
                <td className="text-right">
                  <span className="font-bold text-base">$35,201,133</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <img src={'https://cryptologos.cc/logos/bitcoin-btc-logo.svg'} width="32px" />
                    <div className="text-base">BTC</div>
                  </div>
                </td>
                <td className="text-center">
                  <span className="text-base text-base-content-secondary">
                    Sent <ArrowUp className="text-error inline-block align-text-bottom" size="18" />
                  </span>
                </td>
                <td className="text-right">
                  <span className="font-bold text-base">$35,201,133</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <img src={'https://cryptologos.cc/logos/bitcoin-btc-logo.svg'} width="32px" />
                    <div className="text-base">BTC</div>
                  </div>
                </td>
                <td className="text-center">
                  <span className="text-base text-base-content-secondary">
                    Sent <ArrowUp className="text-error inline-block align-text-bottom" size="18" />
                  </span>
                </td>
                <td className="text-right">
                  <span className="font-bold text-base">$35,201,133</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </Card>
  );
};

export default Transactions;
