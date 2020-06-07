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

  getQuestionByCardIndex: (index) => {
    const getQuestionType = (card) => {
      // tune chances here
      var types = [
        'region',
        'region',
        'type',
        'type',
        'name',
        'name',
        'description',
        'description',
        'cost',
        'cost',
      ]

      if (card.attack && card.health) {
        types.push('attack-health')
      }

      if (card.spellSpeed) {
        types.push('spell-speed')
      }

      return types[Math.floor(Math.random() * types.length)]
    }

    const getTitleByType = (type, card) => {
      if (type === 'region') {
        return 'What region is this card?'
      } else if (type === 'type') {
        return 'What type of this card?'
      } else if (type === 'name') {
        return 'What is this card name?'
      } else if (type === 'description') {
        return 'What is the description of this card?'
      } else if (type === 'cost') {
        return 'What is the cost of this card?'
      } else if (type === 'attack-health') {
        return 'How many attack/health of this card?'
      } else if (type === 'spell-speed') {
        return 'What is the spell speed of this card?'
      }
      return 'unknown'
    }

    const getAnswerOptionsByType = (type, card) => {
      if (type === 'region') {
        return QuestionModel.getRandomRegions()
      } else if (type === 'type') {
        return ['Spell', 'Unit', 'Ability', 'Trap']
      } else if (type === 'name') {
        return QuestionModel.getRandomCardName(card.name)
      } else if (type === 'description') {
        return QuestionModel.getRandomDescription(card.description)
      } else if (type === 'cost') {
        return QuestionModel.getCosts(card.cost)
      } else if (type === 'attack-health') {
        return QuestionModel.getAttackHealth(card.attack, card.health)
      } else if (type === 'spell-speed') {
        return QuestionModel.getSpellSpeed(card.spellSpeed)
      }
      return []
    }

    const getCorrectAnswerByType = (type, card) => {
      if (type === 'region') {
        return card.region
      } else if (type === 'type') {
        return card.type
      } else if (type === 'name') {
        return card.name
      } else if (type === 'description') {
        return card.description
      } else if (type === 'cost') {
        return card.cost
      } else if (type === 'attack-health') {
        return { attack: card.attack, health: card.health }
      } else if (type === 'spell-speed') {
        return card.spellSpeed
      }
      return 'unknown'
    }

    const card = cards[index]
    const type = getQuestionType(card)

    var question = {
      questionType: type,
      title: getTitleByType(type, card),
      answerOptions: getAnswerOptionsByType(type, card),
      correctAnswer: getCorrectAnswerByType(type, card),
    }

    return question
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
    return []
  },

  getRandomDescription: (correctDescription) => {
    return []
  },

  getCosts: (correctCost) => {
    return ['1/4', '2/4', '3/4']
  },

  getAttackHealth: (attack, health) => {
    return []
  },

  getSpellSpeed: (spellSpeed) => {
    return []
  },
}

export default QuestionModel
