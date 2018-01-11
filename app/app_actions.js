import {selectValueFromEvent} from './app_selectors'

export const UPDATE_AMOUNT = 'UPDATE_AMOUNT'
export const UPDATE_LOCATION = 'UPDATE_LOCATION'
export const UPDATE_TAG = 'UPDATE_TAG'
export const UPDATE_TYPE = 'UPDATE_TYPE'
export const UPDATE_NOTES = 'UPDATE_NOTES'
export const FORM_SUBMIT = 'FORM_SUBMIT'
export const UPDATE_DATE = 'UPDATE_DATE'
export const INVALID_AMOUNT = 'INVALID_AMOUNT'
export const INVALID_LOCATION = 'INVALID_LOCATION'
export const INVALID_TAG = 'INVALID_TAG'
export const INVALID_TYPE = 'INVALID_TYPE'

export const actionCreators = {
  amountChange(event) {
    const value = selectValueFromEvent(event)
    return {
      type: UPDATE_AMOUNT,
      payload: value,
    }
  },
  locationChange(event) {
    const value = selectValueFromEvent(event)
    return {
      type: UPDATE_LOCATION,
      payload: value,
    }
  },
  tagChange(event) {
    const value = selectValueFromEvent(event)
    return {
      type: UPDATE_TAG,
      payload: value,
    }
  },
  typeChange(event) {
    const value = selectValueFromEvent(event)
    return {
      type: UPDATE_TYPE,
      payload: value,
    }
  },
  notesChange(event) {
    const value = selectValueFromEvent(event)
    return {
      type: UPDATE_NOTES,
      payload: value,
    }
  },
  dateChange(event) {
    const value = selectValueFromEvent(event)
    return {
      type: UPDATE_DATE,
      payload: value,
    }
  },
  invalidAmount() {
    return {
      type: INVALID_AMOUNT,
    }
  },
  invalidLocation() {
    return {
      type: INVALID_LOCATION,
    }
  },
  invalidTag() {
    return {
      type: INVALID_TAG,
    }
  },
  invalidType() {
    return {
      type: INVALID_TYPE,
    }
  },
}

export default actionCreators;