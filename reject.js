const filter = require('./filter')

const reject = (p) => filter (x => !p(x))

module.exports = reject
