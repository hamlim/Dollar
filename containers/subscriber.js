import React from 'react'
import PropTypes from 'prop-types'

export default class Subscriber extends React.Component {
  static contextTypes = {
    app: PropTypes.any.isRequired,
  }
  render() {
    const { app } = this.context
    return this.props.render({ app })
  }
}
