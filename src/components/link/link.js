import React from 'react';
import classNames from 'classnames/bind';


import Styles from './link.css';

let cx = classNames.bind(Styles);

// @TODO import classnames package as cx, to append an active class if props.isActive


const Link = (props) => {
  let className = cx({
    'Link': props.default,
    'Link is-active': props.active
  });
  return (
    <a href={props.href} className={className}>
      {children}
    </a>
  )
};

export default Link;