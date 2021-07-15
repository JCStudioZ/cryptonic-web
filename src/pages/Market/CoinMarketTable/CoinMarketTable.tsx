import * as React from 'react';
import Card from 'components/Card';
import FormSelect from 'components/FormSelect';
import Section from 'components/Section';
import { Column } from 'react-table';
import Table from 'components/Table';
import { Coin } from 'types';
import { formatCurrency, getCryptoLogoImageURL, getLineChartOption } from 'utils';
import { PercentRate } from 'components/RateText';
import { Line } from 'react-chartjs-2';
import Button from 'components/Button';
import { useResponsive } from 'hooks/responsive';
import ButtonGroup from 'components/ButtonGroup';

type CoinMarketTableProps = {
  coinList?: Coin[];
};

const marketTypeOptions = [
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
];

const CoinMarketTable: React.FC<CoinMarketTableProps> = ({ coinList }) => {
  const [selectedMarketType] = React.useState('1');
  const { isMediumBreakPoint } = useResponsive();

  const columns = React.useMemo(
    (): Column<Coin>[] => [
      {
        accessor: 'imageName',
        width: '20px',
        Cell: ({ value }) => {
          return <img className="min-w-[20px] h-5 mr-4" src={getCryptoLogoImageURL(value)} />;
        },
      },
      {
        Header: 'Name',
        accessor: 'code',
        Cell: ({ row }) => {
          return (
            <div className="flex items-center">
              <div className="text-base mr-8">{row.original.code}</div>
              <div className="text-base">{row.original.name}</div>
            </div>
          );
        },
      },
      {
        accessor: 'price',
        Header: 'Last Price',
        Cell: ({ value }) => {
          return formatCurrency(value);
        },
      },
      {
        accessor: 'marketCap',
        Header: 'Market Cap',
        Cell: ({ value }) => {
          return formatCurrency(value);
        },
      },
      {
        accessor: 'change24h',
        Header: '24h Change',
        Cell: ({ value }) => {
          return <PercentRate value={value} />;
        },
      },
      {
        accessor: 'chartData',
        Header: 'Chart',
        Cell: ({ value }) => {
          return <Line className="!h-10" type="line" data={value} options={getLineChartOption()} />;
        },
      },
      {
        id: 'Action',
        Cell: () => {
          return (
            <div className="flex justify-center">
              <Button variant="primary" size="small" className="px-4">
                Buy
              </Button>
            </div>
          );
        },
      },
    ],
    [],
  );

  const renderMarketType = () => {
    if (isMediumBreakPoint) {
      return (
        <ButtonGroup value={selectedMarketType}>
          {marketTypeOptions.map(({ value, label }) => {
            return (
              <ButtonGroup.Item size="small" selectedValue={value}>
                {label}
              </ButtonGroup.Item>
            );
          })}
        </ButtonGroup>
      );
    }
    return (
      <FormSelect value="all" data={marketTypeOptions} isGhost isBordered selectSize="small" onChange={() => {}} />
    );
  };

  return (
    <Card isCompact>
      <Section titleText="Market Trades" rightElement={renderMarketType()}>
        {coinList && (
          <div className="overflow-x-auto h-full">
            <Table columns={columns} data={coinList} isCompact isFullWidth containerClassName="mt-4" />
          </div>
        )}
      </Section>
    </Card>
  );
};

export default CoinMarketTable;
