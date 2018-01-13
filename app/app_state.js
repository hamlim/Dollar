export const getInitialState = globalState => ({
  amount: 0,
  location: '',
  tag: '',
  tags: [...globalState.tags],
  types: [...globalState.types],
  type: '',
  date: globalState.today,
  notes: '',
})
