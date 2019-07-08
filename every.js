import nil from './nil'

const every = (...generators) => function* (feed = nil) {
    let next
    let food = feed.next()
    
    do {
        next = generators.map(generator => generator.next(food))
        food = feed.next(yield next.map(({ value }) => value))))
    } while (!food.done && !(next.reduce((acc, { done }) => acc && done, true)))
}

export default every
