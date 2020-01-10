'use strict'

const functions = require('firebase-functions')
const admin = require('firebase-admin')

const credentials = require("../credentials");

admin.initializeApp({
  credential: admin.credential.cert(credentials.firebase),
  databaseURL: "https://pizzapal-djlkok.firebaseio.com"
});

const firestore = admin.firestore()
const db = admin.database()

const { dialogflow } = require('actions-on-google')

const app = dialogflow({ 
  clientId : credentials.dialogflow.clientId,
  debug: true,
})

// Import our functions and map to intents
const intents = require('./intents')

app.intent('See Menu', intents.seeMenu(firestore))
app.intent('User Signed In', intents.userSignedIn(firestore))
app.intent('Order', intents.order)
app.intent('Select Pizza', intents.selectPizza(firestore))
app.intent('Select Pizza - yes', intents.selectPizzaYes(db))

exports.pizzapal = functions.https.onRequest(app)
