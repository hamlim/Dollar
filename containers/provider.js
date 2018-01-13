import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase'
import firebaseConfig from '../secrets/firebase'

let check = true

if (check) {
  firebase.initializeApp(firebaseConfig)
  check = false
}

export default class Provider extends React.Component {
  static childContextTypes = {
    app: PropTypes.any.isRequired,
  }
  state = this.props.initialState

  getChildContext() {
    return {
      app: {
        state: this.state,
        createUpdater: this.createUpdater,
      },
    }
  }

  createUpdater = reducer => action => this.setState(state => reducer(state, action))

  render() {
    return this.props.children
  }
}
