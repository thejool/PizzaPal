const listPizzas = require('../helpers/listPizzas')
const pizzaMenu = require('../helpers/pizzaMenu')

const userSignedIn = db => async (conv, params, signin) => {
  const pizzas = await listPizzas(db)

  if (signin.status !== 'OK') {
    conv.ask(`I'm sorry I can't help you with orders before signing in. Can I help you with something else?`)
    conv.ask(new Suggestions(['🍕 Order Pizza', '🕒 Opening hours', 'Cancel']))
  } else {
    conv.ask(`Which pizza do you want?`)
    conv.ask(pizzaMenu(pizzas))
  }
}

module.exports = userSignedIn