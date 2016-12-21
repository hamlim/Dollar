import React from 'react';


const Header = (props) => {
  return (
    <header className="Header">
      <nav className={`Header-nav ${props.activeLinkClass}`}>
        <a href="/app" className="Header-nav-link">💵</a>
        <a href="/analysis" className="Header-nav-link">📈</a>
        <a href="/budgets" className="Header-nav-link">💸</a>
        <a href="/settings" className="Header-nav-link">⚙️</a>
      </nav>
    </header>
  );
};

export default Header;