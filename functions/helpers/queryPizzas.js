const queryPizzas = (pizzas, db) => {
  return db.collection('menu').where("name", "in", pizzas).get()
   .then(querySnapshot => {
      const results = []
      querySnapshot.forEach((doc) => {
        results.push(doc.data())
      })
      return results
    }).catch(console.log)
}

module.exports = queryPizzas