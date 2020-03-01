import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import './App.css';
import 'semantic-ui-css/semantic.min.css';
import DropDownExamples from './features/reactSemanticUi/dropDownExamples';
import TableExamples from './features/reactSemanticUi/tableExamples';
import { StyledMainContainer } from './App.styles';
import TextInputWithFocusButton from './react-hooks/useRef/1.useRef-to-access-a-dom-element/TextInputWithFocusButton';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
const App: React.FC = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/react-hooks/useRef/1.useRef-to-access-a-dom-element">
              Use Ref to access a dom element
            </Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/react-hooks/useRef/1.useRef-to-access-a-dom-element">
            <TextInputWithFocusButton />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

// You can think of these components as "pages"
// in your app.

const Home: React.FC = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <StyledMainContainer>
      <h2>Dashboard</h2>
      <DropDownExamples />
      <TableExamples />
    </StyledMainContainer>
  );
};
