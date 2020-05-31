import { combineReducers } from 'redux'

const INITIAL_STATE = {
  current: [],
  possible: [
    'Allie',
    'Gator',
    'Lizzie',
    'Reptar'
  ],
}

const answerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FRIEND':
      const {
        current,
        possible,
      } = state

      const addedAnswer = possible.splice(action.payload, 1)
      current.push(addedAnswer)

      const newState = { current, possible }
      return newState
    default:
      return state
  }
}

export default combineReducers({
  answers: answerReducer,
})