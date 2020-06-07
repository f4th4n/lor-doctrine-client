import QuestionModel from '../../models/question-model'

export const setQuestions = (questions) => ({
  type: 'SET_QUESTIONS',
  payload: QuestionModel.getRandom(),
})

export const resetQuestions = () => ({
  type: 'RESET_QUESTIONS',
})
