import React from 'react';

import Styles from './footer.css';

const Footer = (props) => {
  let now = new Date();
  let currentYear = now.getFullYear();
  return (
    <footer className={Styles.Footer}>
      <p className={Styles.FooterText}>
        &copy; {currentYear} - <a href="https://matthamlin.me" className={Styles.FooterTextLink}>Matt Hamlin</a> - 👋🏻
      </p>
    </footer>
  )
};

export default Footer;