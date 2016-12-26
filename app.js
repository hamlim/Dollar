import React from 'react';
import Header from './src/components/header/header';
import Footer from './src/components/footer/footer';
import {render} from 'react-dom';

require('./src/styles.css');


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