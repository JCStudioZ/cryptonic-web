// import * as React from 'react';
// import { Column } from 'react-table';
// import cn from 'classnames';
// import { Asset } from 'types';
// import { getCryptoLogoImageURL } from 'utils';

// type AssetListProps = {};

// const data: Asset[] = [
//   {
//     coin: {
//       code: 'BTC',
//       imageName: 'bitcoin-btc-logo',
//       name: 'Bitcoin',
//       price: 35000,
//     },
//     onOrders: 32123.123,
//     totalBalance: 32123.123,
//     availableBalance: 32123.123,
//     market24h: 15,
//   },
//   {
//     coin: {
//       code: 'ETH',
//       imageName: 'ethereum-eth-logo',
//       name: 'Ethereum',
//       price: 35000,
//     },
//     onOrders: 32123.123,
//     totalBalance: 32123.123,
//     availableBalance: 32123.123,
//     market24h: 15,
//   },
// ];
// const AssetList: React.FC<AssetListProps> = () => {
//   const columns: Column<Asset>[] = React.useMemo(
//     () => [
//       {
//         accessor: 'coin',
//         Cell: ({ row }) => {
//           return (
//             <div className="flex items-center space-x-3">
//               <img className="w-5 h-5" src={getCryptoLogoImageURL(row.original.coin.imageName)} />
//               <div className="text-base">{row.original.coin.name}</div>
//             </div>
//           );
//         },
//       },
//       {
//         accessor: 'type',
//         Cell: ({ value }) => {
//           const textClass = cn({
//             'text-error': value === 'sent',
//             'text-success': value === 'received',
//           });
//           return (
//             <span className="text-base text-base-content-secondary">
//               <ArrowUp className={cn(textClass, 'inline-block align-text-bottom')} size="18" /> {value}
//             </span>
//           );
//         },
//       },
//       {
//         accessor: 'amount',
//         Cell: ({ value }) => {
//           return <span className="font-bold text-base">{formatCurrency(value)}</span>;
//         },
//       },
//     ],
//     [],
//   );

//   return <div></div>;
// };

// export default AssetList;
