import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FeaturesLayout from './FeaturesLayout';
import ClonesLayout from './ClonesLayout';

const Layout: React.FC = () => {
  return (
    <Switch>
      <Route path="/clones">
        <ClonesLayout />
      </Route>
      <Route path="/">
        <FeaturesLayout />
      </Route>
    </Switch>
  );
};

export default Layout;
