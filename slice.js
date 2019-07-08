const nil = require('./nil')
const toArray = require('./toArray')
const fromArray = require('./fromArray')

const slice = (start, end) => start < 0
	? (generator, feed = nil) => {
		const array = toArray(generator, feed)
		return fromArray(array.slice(start, end))
	}
	: function* slice (generator, feed = nil) {
	    let next
	    let food = feed.next()
	    let i = 0

	    while (!(food = feed.next()).done && i < start) {
	    	i++
	        generator.next(food)
	    }

	    while (!food.done && !(next = generator.next(food.value)).done && i < end) {
	    	i++
	        food = feed.next(yield next.value)
	    }
	}

module.exports = slice
