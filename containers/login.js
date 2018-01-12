import React from 'react'
import firebase from 'firebase'
import firebaseConfig from '../secrets/firebase.js'
import syncState from '../app/syncstate.js'
import Router from 'next/router'

const STATUS = {
  starting: 'begining-auth',
  success: 'authorized',
  failure: 'auth-failed',
  default: '',
}

class Login extends React.Component {
  state = {
    status: STATUS.default,
  }

  componentDidMount() {
    firebase.initializeApp(firebaseConfig)
    this.provider = new firebase.auth.TwitterAuthProvider()
  }

  handleSignIn = () => {
    // do auth
    this.setState({ status: STATUS.starting })
    firebase
      .auth()
      .signInWithPopup(this.provider)
      .then(result => {
        const user = result.user
        console.log({ user })
        this.setState(
          {
            status: STATUS.success,
            user,
          },
          () => {
            syncState({ userName: this.state.user.displayName })
            Router.push('/app')
          },
        )
      })
      .catch(error => {
        const { code, message, email, credential } = error
        this.setState({
          status: STATUS.failure,
          message,
        })
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSignIn}>Sign In</button>
        {this.state.status}
      </div>
    )
  }
}

export default Login
