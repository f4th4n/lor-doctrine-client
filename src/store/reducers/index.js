import { combineReducers } from 'redux'
import tutorialReducer from './tutorial-reducer'
import questionReducer from './question-reducer'

export default combineReducers({
  tutorial: tutorialReducer,
  questions: questionReducer,
})
