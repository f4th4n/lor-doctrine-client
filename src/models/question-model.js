import cards from '../../assets/data/cards.json'
import config from '../../config'

const Question = {
  getRandom: () => {
    const generateRandomIndices = () => {
      // const cardsLen = cards.length
      const cardsLen = 5 // TODO CHANGE THIS
      var randomIndices = []
      while (randomIndices.length < config.tutorial.cardCount) {
        var r = Math.floor(Math.random() * cardsLen)
        if (randomIndices.indexOf(r) === -1) randomIndices.push(r)
      }

      return randomIndices
    }

    const randomIndices = generateRandomIndices()
    return randomIndices.map((index) => cards[index])
  },

  generateFromRow: (row) => {
    return {
      questionType: 'region',
      title: 'What region is this card?',
      answerOptions: Question.getRandomRegions(),
      correctAnswer: row.region,
    }
  },

  getRandomRegions: () => {
    const count = 4
    const regions = ['Ionia', 'Noxus', 'Demacia', 'Piltover & Zaun', 'Freljord', 'Shadow Isles', 'Bilgewater']

    var randomRegions = []
    while (randomRegions.length < count) {
      var r = Math.floor(Math.random() * regions.length)
      if (randomRegions.indexOf(r) === -1) randomRegions.push(r)
    }

    return randomRegions.map((index) => regions[index])
  },
}

export default Question
