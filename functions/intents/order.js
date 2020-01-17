const listPizzas = require('../helpers/listPizzas')
const pizzaMenu = require('../helpers/pizzaMenu')

const order = db => async (conv) => {
  const pizzas = await listPizzas(db)

  conv.ask(`Which pizza do you want?`)
  conv.ask(pizzaMenu(pizzas))
}

module.exports = order