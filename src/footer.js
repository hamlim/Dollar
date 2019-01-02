import React from './vendor/react.js'
import ReactDOM from './vendor/react-dom.js'

function logoutHandler() {
  //we want to clear all local storage
  localStorage.setItem('user', '')
  localStorage.removeItem('user')
  localStorage.setItem('budgets', '')
  localStorage.removeItem('budgets')
  localStorage.setItem('userExpenses', '')
  localStorage.removeItem('userExpenses')
  //now we redirect to the login page
  window.location.href = './login.html'
}

function Footer() {
  return (
    <section className="container">
      <div className="row">
        <div className="one-half column offset-by-three columns center-text">
          <button className="btn" onClick={logoutHandler} id="logout-btn">
            Logout <i className="emoji navmoji small">:wave:</i>
          </button>
        </div>
      </div>
    </section>
  )
}

ReactDOM.render(<Footer />, document.querySelector('.footer'))
