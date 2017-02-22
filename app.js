import React, {Component} from 'react';
import Header from './src/components/header/header';
import Footer from './src/components/footer/footer';
import {Router, Route, Link, browserHistory} from 'react-router';
import {render} from 'react-dom';

require('./src/styles.css');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      transactions: [],
      budgets: [],
      settings: {}
    }
  }
  render() {
    return (
      <div className="App">
        <Header />

        <Footer />
      </div>
    )
  }
};

//
//
// render(
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <Route path="analysis" component={Analysis} />
//       <Route path="budgets" component={Budgets} />
//       <Route path="Settings" component={Settings} />
//     </Route>
//   </Router>,
//   document.getElementById('mount')
// );
//

if (document.body.getAttribute('data-page') === "app") {
  render(<Header activeLink="app" />, document.getElementById('headerMount'));
} else if (document.body.getAttribute('data-page') === "analysis") {
  render(<Header activeLink="analysis" />, document.getElementById('headerMount'));
} else if (document.body.getAttribute('data-page') === "budgets") {
  render(<Header activeLink="budgets" />, document.getElementById('headerMount'));
} else if (document.body.getAttribute('data-page') === "settings") {
  render(<Header activeLink="settings" />, document.getElementById('headerMount'));
}

render(<Footer />, document.getElementById('footerMount'));
