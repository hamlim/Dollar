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

const UPDATE_AMOUNT = 'UPDATE_AMOUNT'
const UPDATE_LOCATION = 'UPDATE_LOCATION'
const UPDATE_TAG = 'UPDATE_TAG'
const UPDATE_TYPE = 'UPDATE_TYPE'
const UPDATE_NOTES = 'UPDATE_NOTES'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      }
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload,
      }
    case UPDATE_TAG:
      return {
        ...state,
        tag: action.payload,
      }
    case UPDATE_TYPE:
      return {
        ...state,
        type: action.payload,
      }
    case UPDATE_NOTES:
      return {
        ...state,
        notes: action.payload,
      }
    default:
      return state
  }
}

export const actionCreators = {
  amountChange(event) {
    const value = event.target.value
    return {
      type: UPDATE_AMOUNT,
      payload: value,
    }
  },
  locationChange(event) {
    const value = event.target.value
    return {
      type: UPDATE_LOCATION,
      payload: value,
    }
  },
  tagChange(event) {
    const value = event.target.value
    return {
      type: UPDATE_TAG,
      payload: value,
    }
  },
  typeChange(event) {
    const value = event.target.value
    return {
      type: UPDATE_TYPE,
      payload: value,
    }
  },
  notesChange(event) {
    const value = event.target.value
    return {
      type: UPDATE_NOTES,
      payload: value,
    }
  },
}
