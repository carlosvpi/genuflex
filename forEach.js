import nil from './nil'

const forEach = (f) => (generator, feed = nil) {
    let next
    let food = feed.next()
    
    while (!food.done && !(next = generator.next(food.value)).done) {
        f(next.value)
        food = feed.next()
    }
}

export default forEach
