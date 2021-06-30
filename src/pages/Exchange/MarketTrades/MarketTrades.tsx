import * as React from 'react';
import Card from 'components/Card';
import FormSelect from 'components/FormSelect';
import Section from 'components/Section';
import { Column } from 'react-table';
import Table from 'components/Table';

type MarketTradesProps = {};

interface MarketTrade {
  id: string;
  time: string;
  price: number;
  amount: number;
  total: number;
}

const data: MarketTrade[] = [
  {
    id: '1',
    time: '12:34:44',
    price: 24521.2515,
    amount: 39512.5167,
    total: 18692.3699,
  },
  {
    id: '2',
    time: '14:34:11',
    price: 24521.2515,
    amount: 64586.4789,
    total: 13251.9693,
  },
  {
    id: '3',
    time: '12:34:44',
    price: 24521.2515,
    amount: 39512.5167,
    total: 18692.3699,
  },
];

const MarketTrades: React.FC<MarketTradesProps> = () => {
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
      <Section titleText="Market Trades" titleRightElement={renderOrderTypeSelect()}>
        <Table columns={columns} data={data} isCompact isFullWidth containerClassName="mt-4" />
      </Section>
    </Card>
  );
};

export default MarketTrades;
