import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Home from './components/home';
import Analysis from './components/analysis';
import Budgets from './components/budgets';
import Transactions from './components/transactions';
import Settings from './components/settings';

import './start.css';

import reducers from '/reducers';

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const Dollar = _ => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home}/>
      <Route path="/analysis" component={Analysis}/>
      <Route path="/budgets" component={Budgets}/>
      <Route path="/transactions" component={Transactions}/>
      <Route path="/settings" component={Settings}/>
    </Router>
  </Provider>
);

export default Dollar;