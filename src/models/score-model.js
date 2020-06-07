const ScoreModel = {
  calculateScores: (questions, answers) => {
    var correctAnswers = 0

    var index = 0
    for (let question of questions) {
      const type = question.question.questionType
      const answer = answers[index]

      if (type === 'region') {
        if (question.card.region === answer) correctAnswers++
      } else if (type === 'type') {
        if (question.card.type === answer) correctAnswers++
      } else if (type === 'name') {
        if (question.card.name === answer) correctAnswers++
      } else if (type === 'description') {
        if (question.card.description === answer) correctAnswers++
      } else if (type === 'cost') {
        if (question.card.cost === answer) correctAnswers++
      } else if (type === 'attack-health') {
        if (answer === `${question.card.attack} / ${question.card.health}`) correctAnswers++
      } else if (type === 'spell-speed') {
        if (question.card.spellSpeed === answer) correctAnswers++
      }

      index++
    }

    return correctAnswers
  },
}

export default ScoreModel
