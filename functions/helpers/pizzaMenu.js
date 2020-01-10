const {
  Table,
  Button,
} = require('actions-on-google')

const pizzaMenu = pizzas => {
  // Create a table with the pizzas collected from the db
  return(new Table({
    title: 'Our menu',
    subtitle: 'Delicious pizzas made with local ingredients',
    columns: [
      {
        header: 'Name',
        align: 'LEADING',
      },
      {
        header: 'Price',
        align: 'LEADING',
      },
    ],
    rows: pizzas.map((pizza, i) => ({
      cells: [pizza.name, pizza.price + 'kr'],
      dividerAfter: pizzas.length - 1 !== i,
    })),
    buttons: new Button({
      title: 'See full menu',
      url: 'https://assistant.google.com', // Change to restaurant url
    }),
  }))
}

module.exports = pizzaMenu
