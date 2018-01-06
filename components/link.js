import Link from 'next/link'
import styled from 'react-emotion';
import ds from '../design-system/ds.json';

const Anchor = styled('a')`
  color: ${ds.fonts.link.color};
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    border-bottom: solid 2px ${ds.fonts.link.color};
  }
`

export default ({href, children}) => <Link href={href}><Anchor>{children}</Anchor></Link>