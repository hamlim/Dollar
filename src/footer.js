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

function Footer({ page }) {
  return (
    <section className="container">
      <div className="row">
        <div className="one-half column offset-by-three columns center-text">
          {page === 'app' || page === 'analysis' || page === 'budgets' || page === 'account' ? (
            <button className="btn" onClick={logoutHandler} id="logout-btn">
              Logout{' '}
              <span className="emoji navmoji small" aria-hidden>
                :wave:
              </span>
            </button>
          ) : (
            <h5 className="footer-text">
              Made with{' '}
              <span className="emoji small" aria-label="heart">
                :hearts:
              </span>{' '}
              and
              <span className="emoji small" aria-label="joy">
                :smiley_cat:
              </span>{' '}
              by
              <a target="blank" href="//matthamlin.me" title="Matt Hamlin">
                Matt
              </a>
              .
            </h5>
          )}
        </div>
      </div>
    </section>
  )
}

const footer = document.querySelector('.footer')

let page =
  typeof footer.getAttribute('data-footer') === 'string'
    ? footer.getAttribute('data-footer')
    : 'ERR'

ReactDOM.render(<Footer page={page} />, document.querySelector('.footer'))
