import React from 'react';
import Link from '../link/link';

import Styles from './header.css';

const Header = (props) => {
  return (
    <header className={Styles.Header}>
      <nav className={Styles.HeaderNav}>
        <a href="/app" className={Styles.HeaderNavLink} title="App">💵</a>
        <a href="/analysis" className={Styles.HeaderNavLink} title="Analysis">📈</a>
        <a href="/budgets" className={Styles.HeaderNavLink} title="Budgets">💸</a>
        <a href="/settings" className={Styles.HeaderNavLink} title="Settings">⚙️</a>
      </nav>
    </header>
  );
};

export default Header;