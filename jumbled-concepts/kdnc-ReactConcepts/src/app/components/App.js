/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import FuelSavingsPage from '../../containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import Header from "./common/Header";
import Footer from "./common/Footer";
import Navigation from "./navigation/components/Navigation";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Navigation/>
        <div id="main" role="main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/fuel-savings" component={FuelSavingsPage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
