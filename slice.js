import nil from './nil'

const slice = (start, end) => function* slice (generator, feed = nil) {
    let next
    let food = feed.next()
    let i = 0

    while (!(food = feed.next()).done) && i++ < start) {
        generator.next(food)
    }
    
    while (!food.done && !(next = generator.next(food.value)).done && i < end) {
        food = feed.next(yield next.value)
    }
}

export default slice
