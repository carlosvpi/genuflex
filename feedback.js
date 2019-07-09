const nil = require('./nil')

const feedback = (feed = nil) => function* feedback (generatorFunction) {
    let next
    let food = feed.next()
    const generator = generatorFunction(food.value)
    
    while (!food.done && !(next = generator.next(food.value)).done) {
    	food = feed.next(yield next.value)
    }
    console.log(next)
}

module.exports = feedback
