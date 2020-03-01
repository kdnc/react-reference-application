import React from 'react';
import { Table } from 'semantic-ui-react';
import { ConfigurableTableHeaderCell } from '../ConfigurableTableHeaderCell/ConfigurableTableHeaderCell';

export const ConfigurableTableHeader = ({
  columns,
  headerRowRenderer,
  headerCellRenderer
}: any) => {
  const renderHeaderCellNode = (column: any) => {
    const defaultHeaderCellRendering = (
      <ConfigurableTableHeaderCell key={column.id} column={column} />
    );
    if (headerCellRenderer) {
      return headerCellRenderer(column, defaultHeaderCellRendering);
    } else {
      return defaultHeaderCellRendering;
    }
  };

  let headerRow = null;
  const defaultHeaderRowRendering = <Table.Row>{columns.map(renderHeaderCellNode)}</Table.Row>;
  if (headerRowRenderer) {
    headerRow = headerRowRenderer(columns, defaultHeaderRowRendering);
  } else {
    headerRow = defaultHeaderRowRendering;
  }

  return <Table.Header>{headerRow}</Table.Header>;
};
