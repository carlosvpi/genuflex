const nil = require('./nil')

const forEach = (f) => (generator, feed = nil) => {
    let next
    let food = feed.next()
    
    while (!food.done && !(next = generator.next(food.value)).done) {
        f(next.value)
        food = feed.next()
    }
}

module.exports = forEach
