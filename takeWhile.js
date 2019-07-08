import nil from './nil'

const takeWhile = (p) => function* takeWhile (generator, feed = nil) {
	let next
	let food = feed.next()
	while (!food.done && !(next = generator.next(food.value)).done) {
		if (p(next.value)) {
			food = feed.next(yield next.value)
		} else {
			return
		}
	}
}

export default takeWhile