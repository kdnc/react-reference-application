import React from 'react';
import { Table } from 'semantic-ui-react';
import { ConfigurableTableCell } from '../ConfigurableTableCell/ConfigurableTableCell';

export const ConfigurableTableRow = ({ row, columns, cellRenderer }: any) => {
  const renderRowCellNode = (column: any) => {
    const defaultCellRendering = (
      <ConfigurableTableCell key={column.id} column={column} row={row} />
    );
    if (cellRenderer) {
      return cellRenderer(row, column, defaultCellRendering);
    } else {
      return defaultCellRendering;
    }
  };

  return <Table.Row key={row.id}>{columns.map(renderRowCellNode)}</Table.Row>;
};
