const cards = require('./assets/data/cards.json')

var types = []

for (let card of cards) {
  //if (card.attack) types.push(card.type)
  //if (card.health) types.push(card.type)

  if (card.attack && card.health) types.push(card)
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}

console.log(types.filter(onlyUnique)[0].assets)
