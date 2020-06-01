import cards from '../../assets/data/cards.json'
import config from '../../config'

const Question = {
  getRandom: () => {
    const generateRandomIndices = () => {
      const cardsLen = cards.length
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
}

export default Question
