const selectPizzaYes = db => conv => {
  const UNIQUE_ORDER_ID = Math.random().toString(32).substr(2)
  const now = new Date().toLocaleString("sv-SE", {timeZone: "Europe/Stockholm"})
  
  const customer = {
    email: conv.user.profile.payload.email,
    firstName: conv.user.profile.payload.given_name,
    lastName: conv.user.profile.payload.family_name,
    displayName: conv.user.profile.payload.name,
  }

  const order = {
    id: UNIQUE_ORDER_ID,
    customer: customer,
    createdTime: now,
    type: 'TAKE_AWAY',
    status: 'CONFIRMED',
    items: conv.data.pizzas.map(item => ({
      name: item.pizza,
      quantity: item.number ? item.number : 1
    }))
  }

  db.collection('orders').add(order)
    .then(console.log)
    .catch(console.log);
  
  conv.close(`Your order is now being prepared. Grab it in ten to fifteen minutes. Thank you!`)
}

module.exports = selectPizzaYes
