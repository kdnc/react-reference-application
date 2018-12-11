import React from 'react';
import { Route, Switch } from 'react-router';
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import NameForm from "../components/prompt/NameForm";
import PageNotFound from "../components/PageNotFound";
import ColorSwatch from "../components/colors/ColorSwatch";
import LoggingHome from "../components/logging/LoggingHome";
import ProtectedRoute from "../components/secure/ProtectedRoute";
import ProtectedHome from "../components/secure/ProtectedHome";
import Login from "../components/secure/Login";
import Logout from "../components/secure/Logout";

const routes = (
  <div>
    <NavBar />
    <div className={'rightContentContainer'}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/prompt" component={NameForm} />
        <Route path='/color' render={() => {
          return <ColorSwatch text='Red' color='#ff0000'/>
        }}/>
        <Route path='/logging' component={LoggingHome}/>

        <ProtectedRoute path={'/protected'} component={ProtectedHome}/>
        <Route path={'/login'} component={Login}/>
        <Route path={'/logout'} component={Logout}/>

        <Route component={PageNotFound} />
      </Switch>
    </div>
  </div>
);

export default routes;