const INITIAL_STATE = {
  index: 0,
  finished: false,
}

const tutorialReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_CARD':
      return {
        ...state,
        index: state.index + 1,
      }
    case 'TUTORIAL_FINISHED':
      return {
        ...state,
        finished: true,
      }
    case 'RESET_TUTORIAL':
      return { ...INITIAL_STATE }
    default:
      return state
  }
}

export default tutorialReducer
