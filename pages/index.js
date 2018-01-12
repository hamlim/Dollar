import React, { Fragment } from 'react'
import Container from '../components/container.js'
import Header from '../components/header.js'

import LoginContainer from '../containers/login'

export default () => (
  <Fragment>
    <Header />
    <Container>
      <h1>Welcome to Dollar</h1>
      <LoginContainer />
    </Container>
  </Fragment>
)
