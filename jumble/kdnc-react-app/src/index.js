import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from 'react-redux';
import {createBrowserHistory} from "history";
import {routerMiddleware} from 'connected-react-router';
import {AppContainer} from 'react-hot-loader';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import {fromJS} from 'immutable';
import {getDefaultState} from "./getDefaultState";
import {initializeDB} from "./db/initializeDB";

/* Kdnc - connected-react-router - Step 1
Create a history object. */
const history = createBrowserHistory();

/* Kdnc - connected-react-router - Step 4
Use routerMiddleware(history) if you want to dispatch history actions
(e.g. to change URL with push('/path/to/somewhere')). */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

initializeDB();
const defaultState = getDefaultState();

const store = createStore(
  rootReducer(history),
  defaultState,
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history}/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
