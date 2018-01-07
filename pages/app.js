import React, { Fragment } from 'react'
import globalState from '../STATE.js'
import Container from '../components/container'
import Header from '../components/header'
import { Input, Textarea, Select } from '../components/input'
import Provider from '../components/provider'
import { getInitialState, reducer, actionCreators } from '../app/app.js'
import ds from '../design-system/ds.json'

import styled from 'react-emotion'

const Label = styled('label')`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1rem;
`

const Title = styled('h3')`
  display: block;
`

const Form = styled('form')`
  max-width: ${ds.numbers.minWidth};
  margin: 0 auto;
  font-size: ${ds.numbers.medium};
  display: flex;
  flex-direction: column;
`

const Button = styled('button')`
  align-self: flex-end;
  padding: 1rem 2rem;
  color: ${ds.colors.primary};
  border: solid 1px;
  border-radius: 4px;
  background-color: transparent;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
  &:hover,
  &:focus,
  &:active {
    background-color: ${ds.colors.primary};
    color: ${ds.colors.white};
  }
`

export default () => (
  <main>
    <Header />
    <Provider
      initialState={getInitialState(globalState)}
      reducer={reducer}
      render={({ state, dispatch }) => (
        <Container>
          <Title>Enter a New Transaction:</Title>
          <Form onSubmit={event => dispatch(actionCreators.formSubmit(event))}>
            <Label>
              <span>Expense Amount:</span>
              <Input
                type="number"
                value={state.amount}
                onChange={event => dispatch(actionCreators.amountChange(event))}
              />
            </Label>
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
            <Label>
              <span>Location:</span>
              <Input
                type="text"
                value={state.location}
                onChange={event => dispatch(actionCreators.locationChange(event))}
              />
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
