import nil from './nil'

const toArray = (generator, feed = nil) {
    let array = []
    let next
    let food = feed.next()
    
    while (!food.done && !(next = generator.next(food.value)).done) {
        array.push(next.value)
        food = feed.next()
    }
}

export default toArray
