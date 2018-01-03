import React, { Fragment } from 'react'
import styled from 'react-emotion'

import Box from '../components/box.js'

const Container = styled('div')`
  color: mediumseagreen;
`

console.log(Container)

export default () => (
  <Box>
    <h1>hello world</h1>
    <Container>Test</Container>
  </Box>
)
