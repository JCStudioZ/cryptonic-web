import * as React from 'react';
import cn from 'classnames';
import Card from 'components/Card';
import FormSelect from 'components/FormSelect';
import Section from 'components/Section';
import { ArrowUp } from 'react-feather';
import { Column } from 'react-table';
import { getCryptoLogoImageURL } from 'utils';
import Table from 'components/Table';

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

const data = [
  {
    id: '1',
    coinImageName: 'bitcoin-btc-logo',
    coinName: 'BTC',
    transactionType: 'sent',
    totalAmount: 35212944,
  },
  {
    id: '2',
    coinImageName: 'litecoin-ltc-logo',
    coinName: 'LTC',
    transactionType: 'received',
    totalAmount: 35212944,
  },
  {
    id: '3',
    coinImageName: 'ethereum-eth-logo',
    coinName: 'XRP',
    transactionType: 'received',
    totalAmount: 35212944,
  },
  {
    id: '4',
    coinImageName: 'cardano-ada-logo',
    coinName: 'ADA',
    transactionType: 'sent',
    totalAmount: 35212944,
    className: 'text-right',
  },
];

const Transactions: React.FC<TransactionsProps> = () => {
  const columns: Column<object>[] = React.useMemo(
    () => [
      {
        Header: '',
        accessor: 'coinName',
        Cell: ({ row }) => {
          console.log('🚀 ~ file: Transactions.tsx ~ line 67 ~ row', row);
          return (
            <div className="flex items-center space-x-3">
              <img src={getCryptoLogoImageURL(row.original['coinImageName'])} />
              <div className="text-base">{row.values['coinName']}</div>
            </div>
          );
        },
      },
      {
        Header: '',
        accessor: 'transactionType',
        Cell: ({ value }) => {
          const textClass = cn({
            'text-error': value === 'sent',
            'text-success': value === 'received',
          });
          return (
            <span className="text-base text-base-content-secondary">
              {value} <ArrowUp className={cn(textClass, 'inline-block align-text-bottom')} size="18" />
            </span>
          );
        },
      },
      {
        Header: '',
        accessor: 'totalAmount',
        Cell: ({ value }) => {
          return <span className="font-bold text-base">{value}</span>;
        },
      },
    ],
    [],
  );

  return (
    <Card isCompact className="h-full">
      <Section
        titleText="Transaction"
        titleRightElement={
          <FormSelect value="all" data={transactionFilterData} isGhost isBordered selectSize="small" />
        }
      >
        <div className="overflow-y-auto h-full">
          <Table columns={columns} data={data} isCompact />
          {/* <table className="table table-compact w-full mt-4">
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
          </table> */}
        </div>
      </Section>
    </Card>
  );
};

export default Transactions;
