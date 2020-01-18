'use strict'

const functions = require('firebase-functions')
const admin = require('firebase-admin')
const { dialogflow } = require('actions-on-google')
const credentials = require("./credentials");

admin.initializeApp({
  credential: admin.credential.cert(credentials.firebase),
  databaseURL: "https://pizzapal-djlkok.firebaseio.com"
});

const db = admin.firestore()
const app = dialogflow({ 
  clientId : credentials.dialogflow.clientId,
  debug: true,
})

// Import our functions and map to intents
const intents = require('./intents')

app.intent('See Menu', intents.seeMenu(db))
app.intent('Order', intents.order(db))
app.intent('Select Pizza', intents.selectPizza(db))
app.intent('Select Pizza - yes', intents.selectPizzaYes(db))

exports.pizzapal = functions.https.onRequest(app)
