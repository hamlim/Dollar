import React, { useState } from '../vendor/react.mjs'
import ReactDOM from '../vendor/react-dom.mjs'
import Header from '../header.mjs'
import Footer from '../footer.mjs'
import { Route } from '../vendor/reroute.mjs'

function LoginForm({ setLoggedIn }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <section className="container">
      <div className="row">
        <div className="one-half column offset-by-three columns text-center">
          <h1>
            Login to{' '}
            <span className="emoji" aria-label="Dollar">
              :dollar:
            </span>
          </h1>
        </div>
      </div>
      <div>
        <form className="dollar-login-form">
          <fieldset>
            <div className="row">
              <div className="one-third offset-by-one-third column text-center">
                <label htmlFor="dollar-login-username">
                  <span className="emoji small" aria-hidden>
                    :grinning:
                  </span>{' '}
                  Username:
                </label>
                <input
                  value={username}
                  onChange={event => setUsername(event.target.value)}
                  type="text"
                  id="dollar-login-username"
                  placeholder="Username"
                  autoComplete="username"
                />
              </div>
            </div>
            <div className="row">
              <div className="one-third offset-by-one-third column text-center">
                <label htmlFor="dollar-login-password">
                  <span className="emoji small" aria-hidden>
                    :key2:
                  </span>{' '}
                  Password:
                </label>
                <input
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  type="password"
                  id="dollar-login-password"
                  autoComplete="current-password"
                />
              </div>
            </div>
            <div className="row">
              <div className="one-third offset-by-one-third column text-center">
                <label htmlFor="dollar-login-remember">
                  <input type="checkbox" id="dollar-login-remember" /> Remember Me
                </label>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="row">
        <div className="one-third offset-by-one-third column text-center">
          <p>
            Don't have an account yet?{' '}
            <a href="./signup.html" className="link">
              Click Here!
            </a>
          </p>
        </div>
        <div className="one-third offset-by-one-third column text-center">
          <p>
            Forgot your password?
            <a href="mailto:hamlim@outlook.com?Subject=I%20Forgot%20My%20Password%20for%20Dollar!">
              Click Here!
            </a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="one-full column text-center">
          <Route>
            {({ navigate }) => (
              <button
                className="button-tertiary"
                id="dollar-login-login_btn"
                onClick={() => {
                  setLoggedIn(true)
                  navigate('/')
                }}
              >
                Login!
              </button>
            )}
          </Route>
        </div>
      </div>
    </section>
  )
}

function Login({ setLoggedIn }) {
  return (
    <React.Fragment>
      <header className="navigation special-green">
        <Header pageType="login" />
      </header>
      <main className="dollar-main-container">
        <LoginForm setLoggedIn={setLoggedIn} />
      </main>
      <footer className="footer">
        <Footer pageType="login" />
      </footer>
    </React.Fragment>
  )
}

export default Login
