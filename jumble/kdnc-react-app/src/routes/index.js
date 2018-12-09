import React from 'react';
import { Route, Switch } from 'react-router';
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import NameForm from "../components/prompt/NameForm";
import PageNotFound from "../components/PageNotFound";
import ColorSwatch from "../components/colors/ColorSwatch";

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/prompt" component={NameForm} />
      <Route path='/color' render={() => {
        return <ColorSwatch text='Red' color='#ff0000'/>
      }}/>
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default routes;