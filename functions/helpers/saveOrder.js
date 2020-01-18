const saveOrder = (order, db) => {
  return db.ref('orders/' + order.merchantOrderId).set(order, (error) => error === true)
}

module.exports = saveOrder
