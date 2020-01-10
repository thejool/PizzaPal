const {
  Suggestions,
} = require('actions-on-google')
const listPizzas = require('../helpers/listPizzas')
const pizzaMenu = require('../helpers/pizzaMenu')

const seeMenu = db => async (conv) => {
  const pizzas = await listPizzas(db)
  const firstItems = pizzas.length > 3 ? 3 : pizzas.length  
  let pizzaResponse = ''
  for (let i = 0; i < firstItems; i++) {
    // Create a textual response for devices without displays
    pizzaResponse += i === 2 ? 'and ' + pizzas[i].name : pizzas[i].name + ', '
  }

  conv.ask('We have delicious pizzas like ' + pizzaResponse + ' on our menu. See the full menu on our website.')
  conv.ask(pizzaMenu(pizzas))
  conv.ask(new Suggestions(['🍕 Order Pizza', '🕒 Opening hours']))
}

module.exports = seeMenu