import React, { useState } from './vendor/react.mjs'
import { Dollar, Chart, FlyingMoney, Gear, BallotBox, LoginLock, SignupLock } from './icons.mjs'

function Header({ pageType }) {
  if (pageType === 'login') {
    return (
      <nav className="container">
        <section className="row">
          <div className="one-full-column text-center">
            <a href="./index.html">
              <Dollar style={{ height: 50, width: 50 }} aria-label="Dollar" />
            </a>
            <span>
              <a href="./login.html" className="selected">
                <LoginLock style={{ height: 50, width: 50 }} aria-label="Login" />
              </a>
              <a href="./signup.html">
                <SignupLock style={{ height: 50, width: 50 }} aria-label="Signup" />
              </a>
            </span>
          </div>
        </section>
      </nav>
    )
  }
  return (
    <nav className="container">
      <section className="row">
        <div className="one-full column text-middle">
          <a href="./index.html">
            <span className="emoji navmoji" aria-label="Dollar">
              <Dollar style={{ height: 50, width: 50 }} aria-label="Dollar" />
            </span>
          </a>
          <span>
            <a href="./app.html" className="selected">
              <FlyingMoney style={{ height: 50, width: 50 }} aria-label="Application" />
            </a>
            <a href="./analysis.html">
              <Chart style={{ height: 50, width: 50 }} aria-label="Analysis" />
            </a>
            <a href="./budgets.html">
              <BallotBox style={{ height: 50, width: 50 }} aria-label="Budgets" />
            </a>
            <a href="./account.html">
              <Gear style={{ height: 50, width: 50 }} aria-label="Settings" />
            </a>
          </span>
        </div>
      </section>
    </nav>
  )
}

export default Header
