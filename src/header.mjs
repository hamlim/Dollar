import React, { useState } from './vendor/react.mjs'
import { Dollar, Chart, FlyingMoney, Gear } from './icons.mjs'

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
                <span className="emoji navmoji" id="dollar-login-login_emoji" aria-label="Login">
                  :closed_lock_with_key:
                </span>
              </a>
              <a href="./signup.html">
                <span className="emoji navmoji" id="dollar-login-signup_emoji" aria-label="Sign up">
                  :lock_with_ink_pen:
                </span>
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
              <span className="emoji navmoji" id="budget" aria-label="Budgets">
                :ballot_box_with_check:
              </span>
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
