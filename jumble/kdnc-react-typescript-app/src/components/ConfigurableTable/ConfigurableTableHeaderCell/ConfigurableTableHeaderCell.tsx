import React from 'react';
import { Table } from 'semantic-ui-react';

export const ConfigurableTableHeaderCell = ({ column }: any) => {
  return <Table.HeaderCell>{column.label}</Table.HeaderCell>;
};
