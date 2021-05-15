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
import NestingSelectors from './styles/4.nesting-selectors';
import AdaptingHook from './styles/5.adapting-based-on-props/1.adapting-the-hook-api';
import AdaptingStyledComponents from './styles/5.adapting-based-on-props/2.adapting-the-styled-components-api';
import AdaptingHOC from './styles/5.adapting-based-on-props/3.adapting-the-higher-order-component-api';
import StressTest from './styles/5.adapting-based-on-props/4.stress-test';

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
          <TreeItem
            nodeId="5"
            label={
              <Typography component={RouterLink} to={`${path}/styles/nesting-selectors`}>
                Nesting Selectors
              </Typography>
            }
          />
          <TreeItem nodeId="6" label="Adapting based on props">
            <TreeItem
              nodeId="7"
              label={
                <Typography
                  component={RouterLink}
                  to={`${path}/styles/adapting-based-on-props/adapting-the-hook-api`}
                >
                  Adapting the Hook API
                </Typography>
              }
            />
            <TreeItem
              nodeId="8"
              label={
                <Typography
                  component={RouterLink}
                  to={`${path}/styles/adapting-based-on-props/adapting-the-styled-components-api`}
                >
                  Adapting the Styled Components API
                </Typography>
              }
            />
            <TreeItem
              nodeId="9"
              label={
                <Typography
                  component={RouterLink}
                  to={`${path}/styles/adapting-based-on-props/adapting-the-hoc-api`}
                >
                  Adapting the HOC API
                </Typography>
              }
            />
            <TreeItem
              nodeId="10"
              label={
                <Typography
                  component={RouterLink}
                  to={`${path}/styles/adapting-based-on-props/stress-test`}
                >
                  Stress test
                </Typography>
              }
            />
          </TreeItem>
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
        <Route path={`${path}/styles/nesting-selectors`}>
          <NestingSelectors />
        </Route>
        <Route path={`${path}/styles/adapting-based-on-props/adapting-the-hook-api`}>
          <AdaptingHook />
        </Route>
        <Route path={`${path}/styles/adapting-based-on-props/adapting-the-styled-components-api`}>
          <AdaptingStyledComponents />
        </Route>
        <Route path={`${path}/styles/adapting-based-on-props/adapting-the-hoc-api`}>
          <AdaptingHOC />
        </Route>
        <Route path={`${path}/styles/adapting-based-on-props/stress-test`}>
          <StressTest />
        </Route>
      </Switch>
    </div>
  );
}
