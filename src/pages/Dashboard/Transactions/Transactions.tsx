import * as React from 'react';
import cn from 'classnames';
import Card from 'components/Card';
import FormSelect from 'components/FormSelect';
import Section from 'components/Section';
import { ArrowUp } from 'react-feather';
import { Column } from 'react-table';
import { formatCurrency, getCryptoLogoImageURL } from 'utils';
import Table from 'components/Table';
import { useQueryTransactions } from 'hooks/queries';
import { Transaction } from 'types';

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
  const { data = [] } = useQueryTransactions();

  const columns: Column<Transaction>[] = React.useMemo(
    () => [
      {
        accessor: 'coin',
        Cell: ({ row }) => {
          return (
            <div className="flex items-center space-x-3">
              <img className="w-5 h-5" src={getCryptoLogoImageURL(row.original.coin.imageName)} />
              <div className="text-base">{row.original.coin.name}</div>
            </div>
          );
        },
      },
      {
        accessor: 'type',
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
        accessor: 'amount',
        Cell: ({ value }) => {
          return <span className="font-bold text-base">{formatCurrency(value)}</span>;
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
