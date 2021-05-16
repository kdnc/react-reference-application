import React from 'react';
import { Table } from 'semantic-ui-react';
import { ConfigurableTableHeader } from './ConfigurableTableHeader/ConfigurableTableHeader';
import { ConfigurableTableRow } from './ConfigurableTableRow/ConfigurableTableRow';

const ConfigurableTable = ({
  rows,
  columns,
  rowRenderer,
  cellRenderer,
  headerRowRenderer,
  headerCellRenderer
}: any) => {
  const renderRowNode = (row: any) => {
    const defaultRowRendering = (
      <ConfigurableTableRow row={row} columns={columns} cellRenderer={cellRenderer} />
    );
    if (rowRenderer) {
      return rowRenderer(row, columns, defaultRowRendering);
    } else {
      return defaultRowRendering;
    }
  };

  return (
    <Table unstackable>
      <ConfigurableTableHeader
        columns={columns}
        headerRowRenderer={headerRowRenderer}
        headerCellRenderer={headerCellRenderer}
      />

      <Table.Body>{rows.map(renderRowNode)}</Table.Body>
    </Table>
  );
};

export default ConfigurableTable;
