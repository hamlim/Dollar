import React, { Fragment } from 'react'
import globalState from '../STATE.js'
import Header from '../components/header'
import Provider from '../components/provider'

import { getInitialState, reducer, actionCreators } from '../app/app.js'

export default () => (
  <main>
    <Header />
    <Provider
      initialState={getInitialState(globalState)}
      reducer={reducer}
      render={({ state, dispatch }) => (
        <Fragment>
          <h3>Enter a New Transaction:</h3>
          <form onSubmit={event => dispatch(actionCreators.formSubmit(event))}>
            <label>
              <input
                type="number"
                value={state.amount}
                onChange={event => dispatch(actionCreators.amountChange(event))}
              />
              Expense Amount
            </label>
            <label>
              <select value={state.tag} onChange={event => dispatch(actionCreators.tagChange(event))}>
                {state.tags.map(tag => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
              Account Tag
            </label>
            <label>
              <select value={state.type} onChange={event => dispatch(actionCreators.typeChange(event))}>
                {state.types.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              Type of Expense
            </label>
            <label>
              <input
                type="text"
                value={state.location}
                onChange={event => dispatch(actionCreators.locationChange(event))}
              />
              location
            </label>
            <label>
              <textarea value={state.notes} onChange={event => dispatch(actionCreators.notesChange(event))} />
              Expense Notes
            </label>
          </form>
        </Fragment>
      )}
    />
  </main>
)
