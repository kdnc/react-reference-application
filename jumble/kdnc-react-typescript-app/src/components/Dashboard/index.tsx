import React from 'react';
import { StyledMainContainer } from '../../App.styles';
import DropDownExamples from '../../features/reactSemanticUi/dropDownExamples';
import TableExamples from '../../features/reactSemanticUi/tableExamples';

const Dashboard: React.FC = () => {
  return (
    <StyledMainContainer>
      <h2>Dashboard</h2>
      <DropDownExamples />
      <TableExamples />
    </StyledMainContainer>
  );
};


export default Dashboard;
