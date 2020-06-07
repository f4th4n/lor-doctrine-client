const ScoreModel = {
  calculateScores: (questions, answers) => {
    var correctAnswers = 0

    var index = 0
    for (let question of questions) {
      if (question.questionType === 'region') {
        if (question.region === answers[index]) {
          correctAnswers++
        }
      }

      index++
    }
  },
}

export default ScoreModel
