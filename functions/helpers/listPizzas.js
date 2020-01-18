const listPizzas = (db) => {
  // Get all items in the Menu collection from firestore
  return db.collection('menu').get()
    .then(querySnapshot => {
      const results = []
      querySnapshot.forEach((doc) => {
        results.push(doc.data())
      })

      return results
    }).catch(console.log)
}

module.exports = listPizzas
