import React from 'react';
import { Table } from 'semantic-ui-react';

export const ConfigurableTableCell = ({ row, column }: any) => {
  const cellData = row.data[column.id];

  return <Table.Cell>{cellData}</Table.Cell>;
};
