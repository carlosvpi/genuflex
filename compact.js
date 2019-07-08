const filter = require('./filter')

const compact = filter (x => x !== null && x !== undefined)

module.exports = compact
