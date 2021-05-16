import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';

const useStyles = makeStyles({
  cloneContainer: {
    width: '100%',
    height: '100%',
  },
});

const ClonesLayout: React.FC = () => {
  const { path } = useRouteMatch();
  const classes = useStyles();

  return (
    <Switch>
      <Route path={`${path}/amazon`}>
        <iframe
          className={classes.cloneContainer}
          src="http://localhost:3002/"
          title="Amazon clone"
        ></iframe>
      </Route>
      <Redirect to={`${path}/amazon`} />
    </Switch>
  );
};

export default ClonesLayout;
