import React from 'react';
import { Route, Switch } from 'react-router';
import Home from "../components/Home";
import Hello from "../components/Hello";
import NavBar from "../components/NavBar";
import NameForm from "../components/prompt/NameForm";
import PageNotFound from "../components/PageNotFound";

const routes = (
  <div>
    <NavBar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hello" component={Hello} />
        <Route path="/prompt" component={NameForm} />
        <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default routes;