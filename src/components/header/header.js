import React from 'react';
// import Link from '../link/link';

import Styles from './header.css';

const Header = (props) => {
  let links;
  if (props.activeLink === "app") {
    links = (
      <nav className={Styles.HeaderNav}>
        <a href="./app" className={Styles.HeaderNavLinkActive} title="App">💵</a>
        <a href="./analysis" className={Styles.HeaderNavLink} title="Analysis">📈</a>
        <a href="./budgets" className={Styles.HeaderNavLink} title="Budgets">💸</a>
        <a href="./account" className={Styles.HeaderNavLink} title="Settings">⚙️</a>
      </nav>
    );
  } else if (props.activeLink === "analysis") {
    links = (
      <nav className={Styles.HeaderNav}>
        <a href="./app" className={Styles.HeaderNavLink} title="App">💵</a>
        <a href="./analysis" className={Styles.HeaderNavLinkActive} title="Analysis">📈</a>
        <a href="./budgets" className={Styles.HeaderNavLink} title="Budgets">💸</a>
        <a href="./account" className={Styles.HeaderNavLink} title="Settings">⚙️</a>
      </nav>
    )
  } else if (props.activeLink === "budgets") {
    links = (
      <nav className={Styles.HeaderNav}>
        <a href="./app" className={Styles.HeaderNavLink} title="App">💵</a>
        <a href="./analysis" className={Styles.HeaderNavLink} title="Analysis">📈</a>
        <a href="./budgets" className={Styles.HeaderNavLinkActive} title="Budgets">💸</a>
        <a href="./account" className={Styles.HeaderNavLink} title="Settings">⚙️</a>
      </nav>
    )
  } else {
    links = (
      <nav className={Styles.HeaderNav}>
        <a href="./app" className={Styles.HeaderNavLink} title="App">💵</a>
        <a href="./analysis" className={Styles.HeaderNavLink} title="Analysis">📈</a>
        <a href="./budgets" className={Styles.HeaderNavLink} title="Budgets">💸</a>
        <a href="./account" className={Styles.HeaderNavLinkActive} title="Settings">⚙️</a>
      </nav>
    )
  };
  return (
    <header className={Styles.Header}>
      {links}
    </header>
  );
};

export default Header;