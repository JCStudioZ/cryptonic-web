import * as React from 'react';
import { PropGetter, Row, TableBodyProps as ReactTableBodyProps } from 'react-table';

type TableBodyProps = {
  page: Row<object>[];
  getTableBodyProps: (
    propGetter?: PropGetter<object, ReactTableBodyProps, never, Partial<ReactTableBodyProps>>,
  ) => ReactTableBodyProps;
  prepareRow: (row: Row<object>) => void;
};

const renderRow = (page: Row<object>[], prepareRow: (row: Row<object>) => void) => {
  return page.map((row) => {
    prepareRow(row);
    return (
      <tr {...row.getRowProps()}>
        {row.cells.map((cell, index) => {
          if (index === 0) {
            return (
              <th className="align-middle" {...cell.getCellProps()}>
                {cell.render('Cell')}
              </th>
            );
          }

          return (
            <td className="align-middle" width={cell.column.width} {...cell.getCellProps()}>
              {cell.render('Cell')}
            </td>
          );
        })}
      </tr>
    );
  });
};

const TableBody: React.FC<TableBodyProps> = ({ page, getTableBodyProps, prepareRow }) => {
  return <tbody {...getTableBodyProps()}>{renderRow(page, prepareRow)}</tbody>;
};

export default TableBody;
