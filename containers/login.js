import React from 'react'
import syncState from '../app/syncstate.js'
import Router from 'next/router'
import Subscriber from './subscriber'
import firebase from 'firebase'

export const STATUS = {
  starting: 'begining-auth',
  success: 'authorized',
  failure: 'auth-failed',
  default: '',
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'STARTING':
      return {
        ...state,
        authStatus: STATUS.starting,
      }
    case 'SUCCESS':
      return {
        ...state,
        authStatus: STATUS.success,
        user: action.payload,
      }
    case 'FAILURE':
      return {
        ...state,
        authStatus: STATUS.failure,
        authError: action.payload,
      }
    default:
      return state
  }
}

const provider = new firebase.auth.TwitterAuthProvider()

class Login extends React.Component {
  updater = this.props.createUpdater(reducer)

  handleSignIn = () => {
    console.log(this.props)
    // do auth
    this.updater({ type: 'STARTING' })
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user
        console.log({ user })
        this.updater({
          type: 'SUCCESS',
          payload: user,
        })
        syncState({ userName: this.props.state.user.displayName })
        Router.push('/app')
      })
      .catch(error => {
        const { message } = error
        this.updater({
          type: 'FAILURE',
          payload: message,
        })
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSignIn}>Login to Dollar</button>
      </div>
    )
  }
}

export default class extends React.Component {
  render() {
    return <Subscriber render={({ app }) => <Login {...app} />} />
  }
}
