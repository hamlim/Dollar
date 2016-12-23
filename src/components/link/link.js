import React from 'react';

import Styles from './link.css';

// @TODO import classnames package as cx, to append an active class if props.isActive


const Link = (props) => {
  return (
    <a href={props.href} className={Styles.Link}>
      {children}
    </a>
  )
};

export default Link;