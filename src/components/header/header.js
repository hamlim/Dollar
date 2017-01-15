import React from 'react';

import Styles from './header.css';

import Link from '../link/link';

const Header = (props) => {
  let links;
  if (props.activeLink === "app") {
    links = (
      <nav className={Styles.HeaderNav}>
        <Link to="./app" isPrimary title="Home">💵</Link>
        <Link to="./analysis" title="Analysis">📈</Link>
        <Link to="./budgets" title="Budgets">💸</Link>
        <Link to="./account" title="Account Settings">⚙️</Link>
      </nav>
    );
  } else if (props.activeLink === "analysis") {
    links = (
      <nav className={Styles.HeaderNav}>
        <Link to="./app" title="Home">💵</Link>
        <Link to="./analysis" isPrimary title="Analysis">📈</Link>
        <Link to="./budgets" title="Budgets">💸</Link>
        <Link to="./account" title="Account Settings">⚙️</Link>
      </nav>
    )
  } else if (props.activeLink === "budgets") {
    links = (
      <nav className={Styles.HeaderNav}>
        <Link to="./app" title="Home">💵</Link>
        <Link to="./analysis" title="Analysis">📈</Link>
        <Link to="./budgets" isPrimary title="Budgets">💸</Link>
        <Link to="./account" title="Account Settings">⚙️</Link>
      </nav>
    )
  } else {
    links = (
      <nav className={Styles.HeaderNav}>
        <Link to="./app" title="Home">💵</Link>
        <Link to="./analysis" title="Analysis">📈</Link>
        <Link to="./budgets" title="Budgets">💸</Link>
        <Link to="./account" isPrimary title="Account Settings">⚙️</Link>
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
