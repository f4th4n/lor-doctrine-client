const tutorialReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return action.payload
    case 'RESET_QUESTIONS':
      return []
    default:
      return state
  }
}

export default tutorialReducer
