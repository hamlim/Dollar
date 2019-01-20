import React, { useState } from '../vendor/react.mjs'
import ReactDOM from '../vendor/react-dom.mjs'
import App from './app.mjs'
import Login from './login.mjs'

import { Router, Route, Link } from '../vendor/reroute.mjs'
import { FlyingMoney, Chart, Dollar, Gear } from '../icons.mjs'

function Dev() {
  return (
    <Route path="/internal">
      {({ matches }) =>
        matches && (
          <React.Fragment>
            <Dollar />
            <FlyingMoney />
            <Chart />
            <Gear />
          </React.Fragment>
        )
      }
    </Route>
  )
}

function Landing() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  return (
    <Router>
      <Dev />
      <Route path="/">
        {({ matches, navigate }) => {
          if (!isLoggedIn && matches) {
            navigate('/login')
          }
          if (matches) {
            return <App />
          }
          return null
        }}
      </Route>
      <Route path="/login">
        {({ matches }) => matches && <Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />}
      </Route>
      <Route path="/settings">{({ matches }) => matches && <h3>Settings Coming Soon</h3>}</Route>
      <Route path="/budgets">{({ matches }) => matches && <h3>Budgets Coming Soon</h3>}</Route>
    </Router>
  )
}

const { createRoot } = ReactDOM

const mountNode = document.querySelector('#react-app-mount')
if (mountNode) {
  const root = createRoot(mountNode)

  root.render(<Landing />)
}
