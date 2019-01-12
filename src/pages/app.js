import React, { useState } from '../vendor/react.js'
import ReactDOM from '../vendor/react-dom.js'
import Header from '../header.js'
import Footer from '../footer.js'

function useOriginalState(initialState) {
  const [state, set] = useState(initialState)

  return [state, s => set(prevState => ({ ...prevState, ...s }))]
}

function formatDate() {
  let date = new Date()

  // yyyy-MM-dd
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

function AppForm() {
  const [state, setState] = useOriginalState({
    amount: '',
    tag: '',
    location: '',
    type: '',
    notes: '',
    date: formatDate(),
  })

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
                  setState({ amount: event.target.value })
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
                  setState({ tag: event.target.value })
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
                  setState({ type: event.target.value })
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
                  setState({ note: event.target.value })
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
                  setState({ date: event.target.value })
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

ReactDOM.render(<App />, document.querySelector('.js-application-page-mount'))
