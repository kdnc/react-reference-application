import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import ColorSwatch from './components/colors/ColorSwatch';
import NameForm from './components/prompt/NameForm';
import LoggingHome from './components/logging/LoggingHome';
import ProtectedHome from './components/secure/ProtectedHome';
import Login from './components/secure/Login';
import Logout from './components/secure/Logout';
import ProtectedRoute from './components/secure/ProtectedRoute';
import PersonProfileContainer from './containers/PersonProfileContainer';
import People from './components/people/People';
import RecursiveColorSwatch from './components/colors/RecursiveColorSwatch';
import Unicorn from './components/unicorn/Unicorn';
import Fade from './components/transition/Fade';


const App = () => {

    return (
        // Kdnc Step 1 - Wrap content in <Router> tag
        <Router>
            <div>
                <Header/>
                <Sidebar/>
                <div className={'rightContentContainer'}>

                    {/* 
                    Kdnc Step 3 - What <Switch> component would do is return the route
                    that matches first in the set of routes contained by the switch.
                    */}
                    <Switch>
                        {/* Kdnc Step 2 - Add the routes with <Route> tag */}
                        {/* 
                        Kdnc Step 4 - 'exact' property is saying that the match for the route
                        will only occur if the path is an exact match for the URL that's been put
                        into our browser.
                        */}
                        <Route path='/' component={Home} exact/>

                        <Route path='/transitions' component={Fade} />

                        <Route path={'/unicorn'} component={Unicorn}/>
                        <Redirect to='/unicorn' from='/pets'/>

                        <Route path='/color/:text/:color' component={RecursiveColorSwatch}/>
                        <Route path='/color' render={() => {
                            return <ColorSwatch text='Red' color='#ff0000'/>
                        }}/>
                        <Route path='/prompt' component={NameForm}/>
                        <Route path='/logging' component={LoggingHome}/>

                        <Route path={'/people/:id'} component={PersonProfileContainer}/>
                        <Route path={'/people'} component={People}/>

                        <ProtectedRoute path={'/protected'} component={ProtectedHome}/>
                        <Route path={'/login'} component={Login}/>
                        <Route path={'/logout'} component={Logout}/>

                        <Route component={PageNotFound}/>
                    </Switch>

                </div>
            </div>
        </Router>
    );
};

export default App;