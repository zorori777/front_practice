import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './App';
import * as reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
