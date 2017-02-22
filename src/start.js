import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './components/home';

import './start.css';

const Dollar = _ => (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
  </Router>
);

export default Dollar;