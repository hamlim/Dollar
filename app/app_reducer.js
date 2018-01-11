import {
  UPDATE_AMOUNT,
  UPDATE_DATE,
  UPDATE_NOTES,
  UPDATE_LOCATION,
  UPDATE_TAG,
  UPDATE_TYPE,
  FORM_SUBMIT,
  INVALID_AMOUNT,
  INVALID_LOCATION,
  INVALID_TAG,
  INVALID_TYPE,
} from './app_actions'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_AMOUNT:
      return {
        ...state,
        amount: action.payload,
        amountError: false,
      }
    case INVALID_AMOUNT:
      return {
        ...state,
        amountError: true,
      }
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload,
        locationError: false,
      }
    case INVALID_LOCATION:
      return {
        ...state,
        locationError: true,
      }
    case UPDATE_TAG:
      return {
        ...state,
        tag: action.payload,
        tagError: false,
      }
    case INVALID_TAG:
      return {
        ...state,
        tagError: true,
      }
    case UPDATE_TYPE:
      return {
        ...state,
        type: action.payload,
        typeError: false,
      }
    case INVALID_TYPE:
      return {
        ...state,
        typeError: true,
      }
    case UPDATE_NOTES:
      return {
        ...state,
        notes: action.payload,
      }
    case UPDATE_DATE:
      return {
        ...state,
        date: action.payload,
      }
    case FORM_SUBMIT:
      return {
        ...state,
        notes: '',
        tag: '',
        type: '',
        amount: 0,
        location: '',
      }
    default:
      return state
  }
}
