import React, { Fragment } from 'react'
import globalState from '../STATE.js'
import Container from '../components/container'
import Header from '../components/header'
import { Input, Textarea, Select } from '../components/input'
import Provider from '../components/provider'
import { getInitialState } from '../app/app_state.js'
import { reducer } from '../app/app_reducer.js'
import actionCreators from '../app/app_actions.js'
import { handleFormSubmit } from '../app/app_thunks.js'
import { Form, Title, Label, Button, Error } from '../components/app'

export default () => (
  <main>
    <Header />
    <Provider
      initialState={getInitialState(globalState)}
      reducer={reducer}
      render={({ state, dispatch, sideeffect }) => (
        <Container>
          <Title>Enter a New Transaction:</Title>
          <Form onSubmit={handleFormSubmit(dispatch, state)}>
            <Label>
              <span>Expense Amount:</span>
              <Input
                type="number"
                value={state.amount}
                onChange={event => dispatch(actionCreators.amountChange(event))}
              />
            </Label>
            {state.amountError && <Error>Must provide an amount!</Error>}
            <Label>
              <span>Account Tag:</span>
              <Select value={state.tag} onChange={event => dispatch(actionCreators.tagChange(event))}>
                {state.tags.map(tag => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </Select>
            </Label>
            {state.tagError && <Error>Must provide a valid account tag!</Error>}
            <Label>
              <span>Type of Expense:</span>
              <Select value={state.type} onChange={event => dispatch(actionCreators.typeChange(event))}>
                {state.types.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </Label>
            {state.typeError && <Error>Must provide a valid expense type!</Error>}
            <Label>
              <span>Location:</span>
              <Input
                type="text"
                value={state.location}
                onChange={event => dispatch(actionCreators.locationChange(event))}
              />
            </Label>
            {state.locationError && <Error>Must provide a valid location!</Error>}
            <Label>
              <span>Date:</span>
              <Input type="date" value={state.date} onChange={event => dispatch(actionCreators.dateChange(event))} />
            </Label>
            <Label>
              <span>Expense Notes:</span>
              <Textarea value={state.notes} onChange={event => dispatch(actionCreators.notesChange(event))} />
            </Label>
            <Button tyle="submit">Submit</Button>
          </Form>
        </Container>
      )}
    />
  </main>
)
