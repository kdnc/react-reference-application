import React from 'react';
import { Responsive, Table } from 'semantic-ui-react';
import { StyledTableContainer } from '../styles';
import ConfigurableTable from './ConfigurableTable/ConfigurableTable';

const columns = [
  {
    id: 'title',
    label: 'Title',
    type: 'text',
  },
  {
    id: 'rank',
    label: 'IMDB rank',
    type: 'integer',
  },
  {
    id: 'country',
    label: 'Country',
    type: 'custom',
  },
];

const rows = [
  {
    id: 'tt5491994',
    data: {
      title: 'Planet Earth II',
      rank: 1,
      country: 'Sri Lanka',
    },
  },
  {
    id: 'tt0185906',
    data: {
      title: 'Band of Brothers',
      rank: 2,
      country: 'India',
    },
  },
  {
    id: 'tt0795176',
    data: {
      title: 'Planet Earth',
      rank: 3,
      country: <span style={{ backgroundColor: 'aqua' }}>Bhutan</span>,
    },
  },
];

const TableExamples = () => {
  const renderRowCellNode = (row: any, column: any) => {
    const cellData = row.data[column.id];
    const genericCell = <Table.Cell>{cellData}</Table.Cell>;
    if (column.id === 'title') {
      return (
        <Responsive as={React.Fragment} minWidth={992}>
          {genericCell}
        </Responsive>
      );
    } else {
      return genericCell;
    }
  };

  const renderHeaderCellNode = (column: any) => {
    const genericHeaderCell = <Table.HeaderCell>{column.label}</Table.HeaderCell>;
    if (column.id === 'title') {
      return (
        <Responsive as={React.Fragment} minWidth={992}>
          {genericHeaderCell}
        </Responsive>
      );
    } else {
      return genericHeaderCell;
    }
  };

  const renderTableRow = (row: any, columns: any) => {
    return (
      <Table.Row key={row.id}>
        {columns.map((column: any) => renderRowCellNode(row, column))}
      </Table.Row>
    );
  };

  const renderTableHeaderRow = (columns: any) => {
    return <Table.Row>{columns.map(renderHeaderCellNode)}</Table.Row>;
  };

  return (
    <>
      <StyledTableContainer>
        <ConfigurableTable
          columns={columns}
          rows={rows}
          rowRenderer={renderTableRow}
          headerRowRenderer={renderTableHeaderRow}
        />
      </StyledTableContainer>
    </>
  );
};

export default TableExamples;
