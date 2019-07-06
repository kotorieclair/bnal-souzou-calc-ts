import bungos from './bungos'
import cardsRare1 from './cards_rare1'
import cardsRare2 from './cards_rare2'
import cardsRare3 from './cards_rare3'
import rings from './rings'
import skills from './skills'
import weapons from './weapons'

const cards = {
  ...cardsRare1,
  ...cardsRare2,
  ...cardsRare3,
}

export { bungos, weapons, cards, rings, skills }
export default { bungos, weapons, cards, rings, skills }
