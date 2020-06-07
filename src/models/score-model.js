const ScoreModel = {
  calculateScores: (questions, answers) => {
    var correctAnswers = 0

    var index = 0
    for (let question of questions) {
      console.log('test', question.region, answers[index])
      if (question.questionType === 'region') {
        if (question.region === answers[index]) {
          correctAnswers++
        }
      }

      index++
    }

    console.log('correctAnswers', correctAnswers)
  },
}

export default ScoreModel
