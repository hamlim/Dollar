import React, { useReducer, useCallback } from '../vendor/react.mjs'
import ReactDOM from '../vendor/react-dom.mjs'
import Header from '../header.mjs'
import Footer from '../footer.mjs'

function formatDate() {
  let date = new Date()

  // yyyy-MM-dd
  return `${date.getFullYear()}-${
    date.getMonth() === 0
      ? '01'
      : date.getMonth().toString().length === 1
      ? `0${date.getMonth()}`
      : date.getMonth()
  }-${date.getDate()}`
}

const UPDATE_AMOUNT = 'UPDATE_AMOUNT'
const UPDATE_TAG = 'UPDATE_TAG'
const UPDATE_LOCATION = 'UPDATE_LOCATION'
const UPDATE_TYPE = 'UPDATE_TYPE'
const UPDATES_NOTES = 'UPDATES_NOTES'
const UPDATE_DATE = 'UPDATE_DATE'

function appFormReducer(
  state = { amount: '', tag: '', location: '', type: '', notes: '', date: formatDate() },
  action,
) {
  switch (action.type) {
    case UPDATE_AMOUNT: {
      return {
        ...state,
        amount: action.payload,
      }
    }
    case UPDATE_TAG: {
      return {
        ...state,
        tag: action.payload,
      }
    }
    case UPDATE_LOCATION: {
      return {
        ...state,
        location: action.payload,
      }
    }
    case UPDATE_TYPE: {
      return {
        ...state,
        type: action.payload,
      }
    }
    case UPDATES_NOTES: {
      return {
        ...state,
        notes: action.payload,
      }
    }
    case UPDATE_DATE: {
      return {
        ...state,
        date: action.payload,
      }
    }
    default:
      return state
  }
}

function makeAction(type, dispatch) {
  return function(payload) {
    return { type, payload }
  }
}

function AppForm() {
  const [state, dispatch] = useReducer(appFormReducer, undefined, { type: '@@INIT' })

  const amountUpdater = makeAction(UPDATE_AMOUNT)
  const tagUpdater = makeAction(UPDATE_TAG)
  const typeUpdater = makeAction(UPDATE_TYPE)
  const dateUpdater = makeAction(UPDATE_DATE)
  const noteUpdater = makeAction(UPDATES_NOTES)

  return (
    <React.Fragment>
      <div className="row">
        <h1>Enter a New Expense:</h1>
      </div>
      <div id="form">
        <form>
          <fieldset>
            <div className="row">
              <label className="one-half column" htmlFor="amountField">
                Expense Amount:{' '}
              </label>
              <input
                className="one-half column"
                type="number"
                step="any"
                placeholder="$1.23"
                min="0"
                id="transactionAmount"
                required
                value={state.amount}
                onChange={event => {
                  dispatch(amountUpdater(event.target.value))
                }}
              />
            </div>
            <div className="row">
              <label className="one-half column" htmlFor="tagField">
                Account Tag:
              </label>
              <select
                className="one-half column"
                value={state.tag}
                onChange={event => {
                  dispatch(tagUpdater(event.target.value))
                }}
                id="transactionTag"
              >
                <option value="Credit Card" id="optone">
                  Credit Card
                </option>
                <option value="Debit Card" id="opttwo">
                  Debit Card
                </option>
                <option value="Savings" id="optthree">
                  Savings
                </option>
              </select>
            </div>
            <div className="row" id="bloodhound">
              <label className="one-half column" htmlFor="transactionLocation">
                Expense Location:{' '}
              </label>
              <input
                className="typeahead one-half column"
                type="text"
                placeholder="Some Place"
                id="transactionLocation"
                required
              />
            </div>
            <div className="row">
              <label className="one-half column" htmlFor="transactionType">
                Type of Expense:{' '}
              </label>
              <select
                className="one-half column"
                id="transactionType"
                value={state.type}
                onChange={event => {
                  dispatch(typeUpdater(event.target.value))
                }}
                required
              >
                <option value="Other">Other </option>
                <option value="Personal">Personal </option>
                <option value="Food">Food </option>
                <option value="Health">Health </option>
                <option value="Home">Home </option>
                <option value="Gifts">Gifts </option>
                <option value="Transportation">Transportation </option>
                <option value="Utilities">Utilities </option>
                <option value="Travel">Travel </option>
              </select>
            </div>
            <div className="row">
              <label className="one-half column" htmlFor="transactionNotes">
                Expense Notes: (optional)
              </label>
              <textarea
                className="one-half column"
                placeholder="A quick stop to the grocery store for ... (supports markdown!)"
                id="transactionNotes"
                value={state.note}
                onChange={event => {
                  dispatch(noteUpdater(event.target.value))
                }}
              />
            </div>
            <div className="row">
              <label className="one-half column" htmlFor="transactionUserTime">
                Expense Date: (optional)
              </label>
              <input
                type="date"
                className="one-half column"
                id="transactionUserTime"
                value={state.date}
                onChange={event => {
                  dispatch(dateUpdater(event.target.value))
                }}
              />
            </div>
          </fieldset>
        </form>
        <div className="row">
          <button id="submit-btn" className="one-full column button button-tertiary">
            Submit
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

function App() {
  return (
    <React.Fragment>
      <header className="navigation bottom-spacer special-green">
        <Header pageType="app" />
      </header>
      <main>
        <section className="container bottom-spacer" id="input">
          <AppForm />
        </section>
        <section className="container bottom-spacer">
          <div className="row">
            <h3>Ten most recent transactions:</h3>
          </div>
          <div className="overflow-container">
            <table className="u-full-width">
              <thead>
                <tr>
                  <th>
                    <span>
                      <span className="emoji small">:information_source:</span> Info:
                    </span>
                  </th>
                  <th>
                    <span>
                      <span className="emoji small">:clock4:</span> Time:
                    </span>
                  </th>
                  <th>
                    <span>
                      <span className="emoji small">:dollar:</span> Amount:
                    </span>
                  </th>
                  <th>
                    <span>
                      <span className="emoji small">:map:</span> Location:
                    </span>
                  </th>
                  <th>
                    <span>
                      <span className="emoji small">:open_file_folder:</span> Category:
                    </span>
                  </th>
                  <th>
                    <span>
                      <span className="emoji small">:hash:</span> Tag:
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody id="past-transactions" />
            </table>
          </div>
        </section>
      </main>
      <footer className="footer">
        <Footer pageType="app" />
      </footer>
    </React.Fragment>
  )
}

export default App
