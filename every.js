const nil = require('./nil')

const every = (...generators) => function* (feed = nil) {
    let food = feed.next()

    if (food.done) return

    let next = generators.map(generator => generator.next(food))
    
    while (!food.done && !(next.reduce((acc, { done }) => acc || done, false))) {
        food = feed.next(yield next.map(({ value }) => value))
        next = generators.map(generator => generator.next(food))
    }
}

module.exports = every
