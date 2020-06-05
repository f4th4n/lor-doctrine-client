import { combineReducers } from 'redux'
import tutorialReducer from './tutorial-reducer'
import questionReducer from './question-reducer'
import levelReducer from './level-reducer'

export default combineReducers({
  tutorial: tutorialReducer,
  questions: questionReducer,
  level: levelReducer,
})
