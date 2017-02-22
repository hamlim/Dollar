import React from 'react';
import {Link} from 'react-router';

const Anchor = (to, className, children, ...props) => (
  <Link to={to} className={className} {...props}>{children}</Link>
);

export default Anchor;