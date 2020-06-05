const INITIAL_STATE = {
  index: 0,
  finished: false,
  answers: [],
  bg: null,
}

const levelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_QUESTION':
      return {
        ...state,
        index: state.index + 1,
      }
    case 'SET_BG':
      return {
        ...state,
        bg: action.payload,
      }
    case 'MAKE_ANSWER':
      console.log('action.payload', action.payload)
      return {
        ...state,
        answers: [...state.answers, action.payload],
      }
    case 'LEVEL_FINISHED':
      return {
        ...state,
        finished: true,
      }
    default:
      return state
  }
}

export default levelReducer
