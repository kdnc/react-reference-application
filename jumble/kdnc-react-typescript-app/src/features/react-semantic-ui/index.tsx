import { Typography } from '@material-ui/core';
import React from 'react';
import { Link as RouterLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import { StyledMainContainer } from '../../App.styles';
import DropDownExamples from './dropdown-examples';
import ConfigurableTableExample from './table-examples/configurable-table-example';
import MobileSupportedTableExample from './table-examples/mobile-supported-table-example';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function ReactSemanticUiMainComponent() {
  const classes = useStyles();
  const { path } = useRouteMatch();

  return (
    <div>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="Dropdown Examples">
          <TreeItem
            nodeId="2"
            label={
              <Typography
                component={RouterLink}
                to={`${path}/dropdown/custom-active-item-dropdown`}
              >
                Custom active item dropdown
              </Typography>
            }
          />
        </TreeItem>
        <TreeItem nodeId="3" label="Table Examples">
          <TreeItem
            nodeId="4"
            label={
              <Typography component={RouterLink} to={`${path}/table/configurable-table`}>
                Configurable table
              </Typography>
            }
          />
          <TreeItem
            nodeId="5"
            label={
              <Typography component={RouterLink} to={`${path}/table/mobile-supported-table`}>
                Mobile supported table
              </Typography>
            }
          />
        </TreeItem>
      </TreeView>

      <Switch>
        <Route path={`${path}/dropdown/custom-active-item-dropdown`}>
          <StyledMainContainer>
            <DropDownExamples />
          </StyledMainContainer>
        </Route>
        <Route path={`${path}/table/configurable-table`}>
          <StyledMainContainer>
            <ConfigurableTableExample />
          </StyledMainContainer>
        </Route>
        <Route path={`${path}/table/mobile-supported-table`}>
          <StyledMainContainer>
            <MobileSupportedTableExample />
          </StyledMainContainer>
        </Route>
      </Switch>
    </div>
  );
}
