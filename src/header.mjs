import React, { useState } from './vendor/react.mjs'
import ReactDOM from './vendor/react-dom.mjs'

function Header({ pageType }) {
  if (pageType === 'login') {
    return (
      <nav className="container">
        <section className="row">
          <div className="one-full-column text-center">
            <a href="./index.html">
              <span className="emoji navmoji" aria-label="Dollar">
                :dollar:
              </span>
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
              :dollar:
            </span>
          </a>
          <span>
            <a href="./app.html" className="selected">
              <span className="emoji navmoji" id="cash" aria-label="Form">
                :money_with_wings:
              </span>
            </a>
            <a href="./analysis.html">
              <span className="emoji navmoji" id="analysis" aria-label="Analysis">
                :chart_with_upwards_trend:
              </span>
            </a>
            <a href="./budgets.html">
              <span className="emoji navmoji" id="budget" aria-label="Budgets">
                :ballot_box_with_check:
              </span>
            </a>
            <a href="./account.html">
              <span className="emoji navmoji" id="account" aria-label="Settings">
                :gear:
              </span>
            </a>
          </span>
        </div>
      </section>
    </nav>
  )
}

const header = document.querySelector('[data-header]')

if (header) {
  const pageType =
    typeof header.getAttribute('data-header') === 'string'
      ? header.getAttribute('data-header')
      : 'ERR'

  ReactDOM.render(<Header pageType={pageType} />, header)
}

export default Header
