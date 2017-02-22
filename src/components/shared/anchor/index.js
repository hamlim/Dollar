import React from 'react';
import {Link} from 'react-router';

const Anchor = ({to, className, children}) => (
  <Link to={to} className={className}>{children}</Link>
);

export default Anchor;