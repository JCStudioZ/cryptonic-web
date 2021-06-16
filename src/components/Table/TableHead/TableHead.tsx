import * as React from 'react';
import { HeaderGroup } from 'react-table';

type TableHeadProps = {
  headerGroups: HeaderGroup<object>[];
};

const TableHead: React.FC<TableHeadProps> = ({ headerGroups }) => {
  return (
    <thead>
      {headerGroups.map((headerGroups) => (
        <tr {...headerGroups.getHeaderGroupProps()}>
          {headerGroups.headers.map((column) => (
            <th {...column.getHeaderGroupProps}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHead;
