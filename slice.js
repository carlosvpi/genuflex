const toArray = require('./toArray')
const fromArray = require('./fromArray')

const slice = (start, end) => start < 0
	? (generator) => {
		const array = toArray(generator)
		return fromArray(array.slice(start, end))
	}
	: function* slice (generator) {
	    let next
	    let i = 0

	    while (i < start) {
	    	i++
	        generator.next()
	    }

	    while (!(next = generator.next()).done && i < end) {
	    	i++
	        yield next.value
	    }
	}

module.exports = slice
