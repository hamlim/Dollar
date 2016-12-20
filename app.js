import React from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './src/components/app';
import Analysis from './src/components/analysis';
import Budgets from './src/components/budgets';
import Settings from './src/components/settings';
import NoMatch from './src/components/nomatch';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <Route path="/analysis" component={Analysis} />
      <Route path="/budgets" component={Budgets} />
      <Route path="/settings" component={Settings} />
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('#app');
)