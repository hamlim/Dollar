import React from 'react';

import Anchor from '../anchor';

const Link = ({to, children, isActive}) => (
  <Anchor to={to} className={isActive ? styles.activeLink : styles.link}>{children}</Anchor>
);

import styles from './header.css';

const Header = (page) => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Link to="/" {...page == "home" && isActive}><h1 className={styles.title}>Dollar 💵</h1></Link>
      <Link to="/new" {...page == "new" && isActive}>New Transaction</Link>
      <Link to="/budgets" {...page == "budgets" && isActive}>Budgets</Link>
      <Link to="/analysis" {...page == "analysis" && isActive}>Analysis</Link>
      <Link to="/transactions" {...page == "transactions" && isActive}>Past Transactions</Link>
    </nav>
  </header>
);

export default Header;