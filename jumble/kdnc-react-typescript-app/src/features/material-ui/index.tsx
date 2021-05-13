import { Typography } from '@material-ui/core';
import React from 'react';
import { Link as RouterLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import HooksApiComponent from './styles/1.hooks-api';
import StyledComponentApiUsage from './styles/2.styled-components-api';
import HigherOrderComponentApiUsage from './styles/3.higher-order-component-api';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function MaterialUiMainComponent() {
  const classes = useStyles();
  const { path } = useRouteMatch();

  return (
    <div>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="Styles">
          <TreeItem
            nodeId="2"
            label={
              <Typography component={RouterLink} to={`${path}/styles/hooks-api`}>
                Hooks API
              </Typography>
            }
          />
          <TreeItem
            nodeId="3"
            label={
              <Typography component={RouterLink} to={`${path}/styles/styled-components-api`}>
                Styled components API
              </Typography>
            }
          />
          <TreeItem
            nodeId="4"
            label={
              <Typography component={RouterLink} to={`${path}/styles/higher-order-components-api`}>
                Higher Order Component API
              </Typography>
            }
          />
        </TreeItem>
      </TreeView>

      <Switch>
        <Route path={`${path}/styles/hooks-api`}>
          <HooksApiComponent />
        </Route>
        <Route path={`${path}/styles/styled-components-api`}>
          <StyledComponentApiUsage />
        </Route>
        <Route path={`${path}/styles/higher-order-components-api`}>
          <HigherOrderComponentApiUsage />
        </Route>
      </Switch>
    </div>
  );
}
