import cards from '../../assets/data/cards.json'
import config from '../../config'
import helper from '../helper'
import _ from 'lodash'

const QuestionModel = {
  answerOptionsCount: {
    region: 4,
    name: 4,
    description: 4,
    cost: 5,
    attackHealth: 4,
  },

  getRandom: () => {
    const generateRandomIndices = () => {
      const cardsLen = (config.mode === 'dev' ? 5 : cards.length)
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
      // it's like drop rate, if you wanna make some type choosen more often then add them in the array
      var types = [
        'region',
        'region',
        'type',
        'type',
        'name',
        'name',
        //'description',
        //'description',
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
        return QuestionModel.getRandomRegions(card.region)
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
        return QuestionModel.getSpellSpeed()
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
    const regions = ['Ionia', 'Noxus', 'Demacia', 'Piltover & Zaun', 'Freljord', 'Shadow Isles', 'Bilgewater']

    var randomRegions = []
    randomRegions.push(regions.indexOf(correctRegion))
    while (randomRegions.length < QuestionModel.answerOptionsCount.region) {
      var r = Math.floor(Math.random() * regions.length)
      if (randomRegions.indexOf(r) === -1) randomRegions.push(r)
    }

    randomRegions = randomRegions.map((index) => regions[index])
    return _.shuffle(randomRegions)
  },

  getRandomCardName: (correctName) => {
    const names = cards.map((card) => card.name)

    var randomNames = []
    randomNames.push(names.indexOf(correctName))
    while (randomNames.length < QuestionModel.answerOptionsCount.name) {
      var r = Math.floor(Math.random() * names.length)
      if (randomNames.indexOf(r) === -1) randomNames.push(r)
    }

    randomNames = randomNames.map((index) => names[index])
    return _.shuffle(randomNames)
  },

  getRandomDescription: (correctDescription) => {
    const descriptions = cards.filter((card) => card.description).map((card) => card.description)

    var randomDescriptions = []
    randomDescriptions.push(descriptions.indexOf(correctDescription))
    while (randomDescriptions.length < QuestionModel.answerOptionsCount.description) {
      var r = Math.floor(Math.random() * descriptions.length)
      if (randomDescriptions.indexOf(r) === -1) randomDescriptions.push(r)
    }

    randomDescriptions = randomDescriptions.map((index) => helper.getTextFromHTML(descriptions[index]))
    return _.shuffle(randomDescriptions)
  },

  getCosts: (correctCost) => {
    const costs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    var randomCosts = []
    randomCosts.push(costs.indexOf(correctCost))
    while (randomCosts.length < QuestionModel.answerOptionsCount.cost) {
      var r = Math.floor(Math.random() * costs.length)
      if (randomCosts.indexOf(r) === -1) randomCosts.push(r)
    }

    randomCosts = randomCosts.map((index) => costs[index])
    randomCosts.sort((a, b) => a - b)
    return randomCosts.map((cost) => cost.toString())
  },

  getAttackHealth: (argAttack, argHealth) => {
    const attacks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 30]
    const healths = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 30]

    var attackHealthList = []
    for (let attack of attacks) {
      for (let health of healths) {
        attackHealthList.push(`${attack.toString()} / ${health.toString()}`)
      }
    }

    var randomAttackHealthList = []
    randomAttackHealthList.push(attackHealthList.indexOf(`${argAttack.toString()} / ${argHealth.toString()}`))
    while (randomAttackHealthList.length < QuestionModel.answerOptionsCount.attackHealth) {
      var r = Math.floor(Math.random() * attackHealthList.length)
      if (randomAttackHealthList.indexOf(r) === -1) randomAttackHealthList.push(r)
    }

    randomAttackHealthList = randomAttackHealthList.map((index) => attackHealthList[index])
    return _.shuffle(randomAttackHealthList)
  },

  getSpellSpeed: () => {
    return ['Burst', 'Fast', 'Slow']
  },
}

export default QuestionModel
