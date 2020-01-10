const {
  SignIn,
} = require('actions-on-google')

const order = conv => {
  conv.ask(new SignIn('To order pizza'))
}

module.exports = order