import * as React from 'react';
import Card from 'components/Card';
import FormSelect from 'components/FormSelect';
import Section from 'components/Section';
import { Column } from 'react-table';
import Table from 'components/Table';

type MarketTradesProps = {
  marketTrades?: MarketTrade[];
};

interface MarketTrade {
  id: string;
  time: string;
  price: number;
  amount: number;
  total: number;
}

const MarketTrades: React.FC<MarketTradesProps> = ({ marketTrades }) => {
  const columns = React.useMemo(
    (): Column<MarketTrade>[] => [
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
            label: 'Open Order',
            value: '1',
          },
          {
            label: 'Order History',
            value: '2',
          },
          {
            label: 'Order Book',
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
          <Table columns={columns} data={marketTrades} isCompact isFullWidth containerClassName="mt-4" />
        )}
      </Section>
    </Card>
  );
};

export default MarketTrades;
