import * as React from 'react';
import Card from 'components/Card';
import FormSelect from 'components/FormSelect';
import Section from 'components/Section';
import { Column } from 'react-table';
import Table from 'components/Table';

type CoinMarketTableProps = {
  marketTrades?: CoinMarketInfo[];
};

interface CoinMarketInfo {
  id: string;
  time: string;
  price: number;
  amount: number;
  total: number;
}

const CoinMarketTable: React.FC<CoinMarketTableProps> = ({ marketTrades }) => {
  const columns = React.useMemo(
    (): Column<CoinMarketInfo>[] => [
      {
        Header: 'Time',
        accessor: 'time',
      },
      {
        Header: 'Price',
        accessor: 'price',
        Cell: ({ value }) => {
          return <span className="text-success">{value}</span>;
        },
      },
      {
        Header: 'Amount',
        accessor: 'amount',
      },
      {
        Header: 'Total',
        accessor: 'total',
      },
    ],
    [],
  );

  const renderOrderTypeSelect = () => {
    return (
      <FormSelect
        value="all"
        data={[
          {
            label: 'Favorites',
            value: '1',
          },
          {
            label: 'Gainers',
            value: '2',
          },
          {
            label: 'Losers',
            value: '3',
          },
        ]}
        isGhost
        isBordered
        selectSize="small"
        onChange={() => {}}
      />
    );
  };

  return (
    <Card isCompact>
      <Section titleText="Market Trades" rightElement={renderOrderTypeSelect()}>
        {marketTrades && (
          <div className="overflow-x-auto h-full">
            <Table columns={columns} data={marketTrades} isCompact isFullWidth containerClassName="mt-4" />
          </div>
        )}
      </Section>
    </Card>
  );
};

export default CoinMarketTable;
