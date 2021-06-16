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
    totalAmount: '$35,212,944',
  },
  {
    id: '2',
    coinImageName: 'litecoin-ltc-logo',
    coinName: 'LTC',
    transactionType: 'received',
    totalAmount: '$35,212,944',
  },
  {
    id: '3',
    coinImageName: 'ethereum-eth-logo',
    coinName: 'XRP',
    transactionType: 'received',
    totalAmount: '$35,212,944',
  },
  {
    id: '4',
    coinImageName: 'cardano-ada-logo',
    coinName: 'ADA',
    transactionType: 'sent',
    totalAmount: '$35,212,944',
    className: 'text-right',
  },
];

const Transactions: React.FC<TransactionsProps> = () => {
  const columns: Column<object>[] = React.useMemo(
    () => [
      {
        accessor: 'coinName',
        Cell: ({ row }) => {
          console.log('🚀 ~ file: Transactions.tsx ~ line 67 ~ row', row);
          return (
            <div className="flex items-center space-x-3">
              <img className="w-5 h-5" src={getCryptoLogoImageURL(row.original['coinImageName'])} />
              <div className="text-base">{row.values['coinName']}</div>
            </div>
          );
        },
      },
      {
        accessor: 'transactionType',
        Cell: ({ value }) => {
          const textClass = cn({
            'text-error': value === 'sent',
            'text-success': value === 'received',
          });
          return (
            <span className="text-base text-base-content-secondary">
              <ArrowUp className={cn(textClass, 'inline-block align-text-bottom')} size="18" /> {value}
            </span>
          );
        },
      },
      {
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
          <Table columns={columns} data={data} isCompact isFullWidth showHeader={false} containerClassName="mt-4" />
        </div>
      </Section>
    </Card>
  );
};

export default Transactions;
