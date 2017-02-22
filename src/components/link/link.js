import React from 'react';

import Styles from './link.css';

const Link = ({to, isPrimary, children}) => {
  return (
    <a href={to} className={isPrimary ? Srtyles.primary : Styles.link}>
      {children}
    </a>
  )
};

export default Link;
