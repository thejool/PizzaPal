const { Suggestions } = require('actions-on-google')
const queryPizzas = require('../helpers/queryPizzas')

// Replace numbers with words for better looking conversations
const numberToWord = number => {
  const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
  return words[number]
}

const selectPizza = db => async (conv, { QuantityAndPizza }) => {
  const dialogflowPizzas = QuantityAndPizza.map(item => item.pizza)

  try {
    // Get the pizza object from our db
    const results = await queryPizzas(dialogflowPizzas, db)
    
    // Check if all ordered pizzas are actually on the menu
    if(results.length === dialogflowPizzas.length) {
      let totalPrice = 0
      let pizzaResponse = ''
      results.forEach((item, i) => {
        const amount = QuantityAndPizza[i].number ? QuantityAndPizza[i].number : 1 // Check if we get a quantity from dialogflow
        const pizza = QuantityAndPizza[i].pizza
        totalPrice += item.price * parseInt(amount) // Set the total price for all selected pizzas
        
        // Format the response string
        if(results.length > 1) {
          if(i + 2 === results.length) {
            pizzaResponse += `${numberToWord(amount)} ${pizza} and `
          } else {
            pizzaResponse += `${numberToWord(amount)} ${pizza}, `
          }
        } else {
          pizzaResponse += `${numberToWord(amount)} ${pizza}`
        }
      })

      conv.data.pizzas = QuantityAndPizza

      conv.ask(`${pizzaResponse} for a total of: ${totalPrice}kr. Do you want to proceed with order?`)
      conv.ask(new Suggestions(['Yes', 'No']))
    } else {
      throw(new Error())
    }
  }
  catch(err) {
    conv.ask(`I'm sorry, we don't have the pizza you selected. Choose another pizza please.`)
  }
}

module.exports = selectPizza
