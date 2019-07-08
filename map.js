import nil from './nil'

const map = (f) => function* map (generator, feed = nil) {
    let next
    let food = feed.next()
    
    while (!food.done && !(next = generator.next(food.value)).done) {
        food = feed.next(yield f(next.value))
    }
}

export default map
