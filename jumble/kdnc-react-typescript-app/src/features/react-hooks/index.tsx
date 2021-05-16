import { Typography } from '@material-ui/core';
import React from 'react';
import { Link as RouterLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import TextInputWithFocusButton from './useRef/1.useRef-to-access-a-dom-element/TextInputWithFocusButton';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function ReactHooksMainComponent() {
  const classes = useStyles();
  const { path } = useRouteMatch();

  return (
    <div>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="UseRef">
          <TreeItem
            nodeId="2"
            label={
              <Typography
                component={RouterLink}
                to={`${path}/useRef/1.useRef-to-access-a-dom-element`}
              >
                useRef to access a DOM element
              </Typography>
            }
          />
        </TreeItem>
      </TreeView>

      <Switch>
        <Route path={`${path}/useRef/1.useRef-to-access-a-dom-element`}>
          <TextInputWithFocusButton />
        </Route>
      </Switch>
    </div>
  );
}
