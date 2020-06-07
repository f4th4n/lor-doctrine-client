import cards from '../../assets/data/cards.json'
import config from '../../config'

const QuestionModel = {
  getRandom: () => {
    const generateRandomIndices = () => {
      // const cardsLen = cards.length
      const cardsLen = 5 // TODO CHANGE THIS
      var randomIndices = []
      while (randomIndices.length < config.questionCount) {
        var r = Math.floor(Math.random() * cardsLen)
        if (randomIndices.indexOf(r) === -1) randomIndices.push(r)
      }

      return randomIndices
    }

    const randomIndices = generateRandomIndices()
    const getCardAndQuestion = (index) => {
      return {
        card: cards[index],
        question: QuestionModel.getQuestionByCardIndex(index),
      }
    }
    return randomIndices.map((index) => getCardAndQuestion(index))
  },

  getQuestionByCardIndex: (row) => {
    const questions = [
      {
        questionType: 'region',
        title: 'What region is this card?',
        answerOptions: QuestionModel.getRandomRegions(),
        correctAnswer: row.region,
      },
      {
        questionType: 'type',
        title: 'What type of this card?',
        answerOptions: ['Spell', 'Unit', 'Ability', 'Trap'],
        correctAnswer: row.type,
      },
      {
        questionType: 'name',
        title: 'What is this card name?',
        answerOptions: QuestionModel.getRandomCardName(row.name),
        correctAnswer: row.name,
      },
      {
        questionType: 'description',
        title: 'What is the description of this card?',
        answerOptions: QuestionModel.getRandomDescription(row.description),
        correctAnswer: row.description,
      },
      {
        questionType: 'cost',
        title: 'What is the cost of this card?',
        answerOptions: QuestionModel.getCosts(row.cost),
        correctAnswer: row.cost,
      },
      {
        questionType: 'cost',
        title: 'How many attack/health of this card?',
        answerOptions: QuestionModel.getAttackHealth(row.attack, row.health),
        correctAnswer: { cost: row.cost, health: row.health },
      },
      {
        questionType: 'spell-speed',
        title: 'What is the spell speed of this card?',
        answerOptions: QuestionModel.getSpellSpeed(row.spellSpeed),
        correctAnswer: row.spellSpeed,
      },
    ]

    return {
      questionType: 'region',
      title: 'What region is this card?',
      answerOptions: QuestionModel.getRandomRegions(row.region),
      correctAnswer: row.region,
    }
  },

  getRandomRegions: (correctRegion) => {
    // TODO push correctRegion to randomRegions
    const count = 4
    const regions = ['Ionia', 'Noxus', 'Demacia', 'Piltover & Zaun', 'Freljord', 'Shadow Isles', 'Bilgewater']

    var randomRegions = []
    while (randomRegions.length < count) {
      var r = Math.floor(Math.random() * regions.length)
      if (randomRegions.indexOf(r) === -1) randomRegions.push(r)
    }

    return randomRegions.map((index) => regions[index])
  },

  getRandomCardName: (correctName) => {
    // name
  },

  getRandomDescription: (correctDescription) => {
    return []
  },

  getCosts: (correctCost) => {
    return [1, 2, 3]
  },

  getAttackHealth: (attack, health) => {
    return []
  },

  getSpellSpeed: (spellSpeed) => {
    return []
  },
}

export default QuestionModel
