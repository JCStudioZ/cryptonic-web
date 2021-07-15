import * as React from 'react';
import { Column } from 'react-table';
import cn from 'classnames';
import { Asset } from 'types';
import { formatCurrency, getCryptoLogoImageURL } from 'utils';
import Table from 'components/Table';
import { ada, btc, eth, ltc, monero, pancakeswap } from 'data';

type AssetListProps = {};

const data: Asset[] = [
  {
    coin: btc,
    onOrders: 32123.123,
    totalBalance: 32123.123,
    availableBalance: 32123.123,
    market24h: 15,
  },
  {
    coin: eth,
    onOrders: 32123.123,
    totalBalance: 32123.123,
    availableBalance: 32123.123,
    market24h: 15,
  },
  {
    coin: ltc,
    onOrders: 32123.123,
    totalBalance: 32123.123,
    availableBalance: 32123.123,
    market24h: 15,
  },
  {
    coin: ada,
    onOrders: 32123.123,
    totalBalance: 32123.123,
    availableBalance: 32123.123,
    market24h: 15,
  },
  {
    coin: monero,
    onOrders: 32123.123,
    totalBalance: 32123.123,
    availableBalance: 32123.123,
    market24h: 15,
  },
  {
    coin: pancakeswap,
    onOrders: 32123.123,
    totalBalance: 32123.123,
    availableBalance: 32123.123,
    market24h: 15,
  },
  {
    coin: eth,
    onOrders: 32123.123,
    totalBalance: 32123.123,
    availableBalance: 32123.123,
    market24h: 15,
  },
  {
    coin: btc,
    onOrders: 32123.123,
    totalBalance: 32123.123,
    availableBalance: 32123.123,
    market24h: 15,
  },
  {
    coin: ltc,
    onOrders: 32123.123,
    totalBalance: 32123.123,
    availableBalance: 32123.123,
    market24h: 15,
  },
  {
    coin: monero,
    onOrders: 32123.123,
    totalBalance: 32123.123,
    availableBalance: 32123.123,
    market24h: 15,
  },
];
const AssetList: React.FC<AssetListProps> = () => {
  const columns = React.useMemo(
    (): Column<Asset>[] => [
      {
        id: 'coin-logo',
        width: '20px',
        Cell: ({ row }) => {
          return <img className="min-w-[20px] h-5 mr-4" src={getCryptoLogoImageURL(row.original.coin.imageName)} />;
        },
      },
      {
        Header: 'Name',
        accessor: 'coin',
        Cell: ({ row }) => {
          return (
            <div className="flex items-center">
              <div className="text-base mr-8">{row.original.coin.code}</div>
              <div className="text-base">{row.original.coin.name}</div>
            </div>
          );
        },
      },
      {
        Header: 'On Orders',
        accessor: 'onOrders',
        Cell: ({ value }) => <span>{formatCurrency(value)}</span>,
      },
      {
        Header: 'Availabe Balance',
        accessor: 'availableBalance',
        Cell: ({ value }) => <span>{formatCurrency(value)}</span>,
      },
      {
        Header: 'Total Balance',
        accessor: 'totalBalance',
        Cell: ({ value }) => <span>{formatCurrency(value)}</span>,
      },
      {
        Header: '24h Market',
        accessor: 'market24h',
        Cell: ({ value }) => {
          const textClass = cn({
            'text-base': true,
            'text-error': value < 0,
            'text-success': value > 0,
          });
          return <span className={textClass}>{value}%</span>;
        },
      },
    ],
    [],
  );

  return (
    <div>
      <div className="overflow-x-auto h-full">
        <Table columns={columns} data={data} isCompact isFullWidth containerClassName="mt-4" />
      </div>
    </div>
  );
};

export default AssetList;
