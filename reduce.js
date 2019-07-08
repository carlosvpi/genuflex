const nil = require('./nil')

const reduce = (f, init) => function* reduce (generator, feed = nil) {
    let food = feed.next()
    
    if (food.done) return
    
    let next
    let i = 0
    let acc = init !== undefined ? init : generator.next(food.value).value

    food = feed.next()
    while (!food.done && !(next = generator.next(food.value)).done) {
        food = feed.next(yield (acc = f(acc, next.value, i++)))
    }
}

module.exports = reduce
