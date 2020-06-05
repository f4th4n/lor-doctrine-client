export const nextQuestion = () => ({
  type: 'NEXT_QUESTION',
})

export const makeAnswer = (answer) => ({
  type: 'MAKE_ANSWER',
  payload: answer,
})

export const levelFinished = () => ({
  type: 'LEVEL_FINISHED',
})

export const setBg = (bg) => ({
  type: 'SET_BG',
  payload: bg,
})
