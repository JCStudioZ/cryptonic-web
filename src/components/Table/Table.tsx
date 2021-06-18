import * as React from 'react';
import { Column, usePagination, useTable } from 'react-table';
import cn from 'classnames';
import TableBody from './TableBody';
import TableHead from './TableHead/TableHead';

type TableProps = {
  columns: Column<any>[];
  data: object[];
  containerClassName?: string;
  isZebraStyle?: boolean;
  isCompact?: boolean;
  isFullWidth?: boolean;
  showHeader?: boolean;
};

const Table: React.FC<TableProps> = ({
  columns,
  data,
  containerClassName,
  isZebraStyle,
  isCompact,
  isFullWidth,
  showHeader = true,
}) => {
  const { getTableBodyProps, getTableProps, headerGroups, prepareRow, rows } = useTable(
    {
      columns,
      data,
    },
    usePagination,
  );

  const tableClass = cn({
    table: true,
    'table-zebra': isZebraStyle,
    'table-compact': isCompact,
    'w-full': isFullWidth,
  });

  return (
    <div className={containerClassName}>
      <table className={tableClass} {...getTableProps()}>
        {showHeader && <TableHead headerGroups={headerGroups} />}
        <TableBody page={rows} getTableBodyProps={getTableBodyProps} prepareRow={prepareRow} />
      </table>
    </div>
  );
};

export default Table;
