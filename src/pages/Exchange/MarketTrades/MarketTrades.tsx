import * as React from 'react';
import Card from 'components/Card';
import FormSelect from 'components/FormSelect';
import Section from 'components/Section';
import { Column } from 'react-table';
import Table from 'components/Table';

type MarketTradesProps = {};

interface MarketTrade {
  time: string;
  price: number;
}

const data: MarketTrade[] = [
  {
    time: '12:34:44',
    price: 24521.2515,
  },
  {
    time: '24:34:11',
    price: 24521.2515,
  },
];

const MarketTrades: React.FC<MarketTradesProps> = () => {
  const columns: Column<MarketTrade>[] = React.useMemo(
    () => [
      {
        accessor: 'time',
      },
      {
        accessor: 'price',
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
            label: 'Completed Order',
            value: '2',
          },
        ]}
        isGhost
        isBordered
        selectSize="small"
      />
    );
  };

  return (
    <Card isCompact>
      <Section titleText="Market Trades" titleRightElement={renderOrderTypeSelect()}>
        <Table columns={columns} data={data} isCompact isFullWidth showHeader={false} containerClassName="mt-4" />
      </Section>
    </Card>
  );
};

export default MarketTrades;
