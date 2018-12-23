import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router/immutable';
import logo from './logo.svg';
import routes from './routes'
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

/* Kdnc - connected-react-router - Step 5
Wrap your react-router v4 routing with ConnectedRouter and pass the history object as a prop.
Place ConnectedRouter as a child of react-redux's Provider. */
const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      { routes }
    </ConnectedRouter>
  )
};

App.propTypes = {
  history: PropTypes.object,
}

export default App;