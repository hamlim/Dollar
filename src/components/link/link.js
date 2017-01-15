import React from 'react';

import Styles from './link.css';

const Link = ({to, isPrimary, title, children}) => {
  return (
    <a href={to} className={Styles.Link + (isPrimary ? " " + Styles.LinkPrimary : "")} title={title}>
      {children}
    </a>
  )
};


export default Link;
