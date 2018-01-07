import styled from 'react-emotion'
import ds from '../design-system/ds.json'

const withHover = () => `
  &:hover,
  &:focus,
  &:active {
    border-color: ${ds.colors.primary};
  }
`

export const Input = styled('input')`
  border-radius: 4px;
  font-size: ${ds.numbers.medium};
  height: 30px;
  padding: 5px 10px;
  border: solid 1px ${ds.colors.base};
  outline: transparent 1px solid;
  ${withHover()};
`

export const Textarea = styled('textarea')`
  height: 60px;
  font-size: ${ds.numbers.medium};
  border-radius: 4px;
  padding: 5px 10px;
  border: solid 1px ${ds.colors.base};
  outline: transparent 1px solid;
  ${withHover()};
`

export const Select = styled('select')`
  height: 30px;
  background-color: ${ds.colors.white};
  font-size: ${ds.numbers.medium};
  border-radius: 4px;
  padding: 5px 10px;
  border: solid 1px ${ds.colors.base};
  outline: solid 1px transparent;
  ${withHover()};
`
