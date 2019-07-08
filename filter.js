const nil = require('./nil')

const filter = (p) => function* filter (generator, feed = nil) {
    let next
    let food = feed.next()
    
    while (!food.done && !(next = generator.next(food.value)).done) {
        if (p(next.value)) {
            food = feed.next(yield next.value)
        }
    }
}

module.exports = filter
