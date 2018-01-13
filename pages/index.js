import React, { Fragment } from 'react'
import Container from '../components/container.js'
import Header from '../components/header.js'
import Provider from '../containers/provider'

import LoginContainer from '../containers/login'

export default () => (
  <Provider initialState={{}}>
    <Header />
    <Container>
      <h1>Welcome to Dollar</h1>
      <LoginContainer />
    </Container>
  </Provider>
)
