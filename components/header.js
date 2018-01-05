import React from 'react'
import styled from 'react-emotion'
import ds from '../design-system/ds.json'

import Link from 'next/link'

const Header = styled('header')`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${ds.numbers.maxWidth};
  background-color: ${ds.colors.accent};
`

const Nav = styled('nav')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled('h1')`
  font-size: ${ds.fonts.headline.size};
  color: ${ds.fonts.headline.color};
`

const NavItem = styled('li')`
  display: inline-block;
  font-size: ${ds.numbers.large};
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`

export default () => (
  <Header>
    <Title>
      <Link to="/">
        <a href="/">Dollar</a>
      </Link>
    </Title>
    <Nav>
      <ul>
        <NavItem>
          <Link to="/app">
            <a href="/app">💵</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/analysis">
            <a href="/analysis">📈</a>
          </Link>
        </NavItem>
      </ul>
    </Nav>
  </Header>
)
