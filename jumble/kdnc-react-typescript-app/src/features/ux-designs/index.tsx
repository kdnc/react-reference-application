import { Typography } from '@material-ui/core';
import React from 'react';
import { Link as RouterLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import SpeechBubbleComponent from './speech-bubble/1.speech-bubble';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function UxDesignsComponent() {
  const classes = useStyles();
  const { path } = useRouteMatch();

  return (
    <div>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="Designs">
          <TreeItem nodeId="2" label="Speech Bubble">
            <TreeItem
              nodeId="3"
              label={
                <Typography component={RouterLink} to={`${path}/speech-bubble`}>
                  1. Speech Bubble
                </Typography>
              }
            />
          </TreeItem>
        </TreeItem>
      </TreeView>

      <Switch>
        <Route path={`${path}/speech-bubble`}>
          <SpeechBubbleComponent />
        </Route>
      </Switch>
    </div>
  );
}
