var assert = require('assert')
var fromArray = require('../fromArray')
var toArray = require('../toArray')
var reduce = require('../reduce')

describe('reduce', function () {
	it('should add all elements', function() {
		const array = [0, 1, 2, 3, 4, 5, 6]
		const add = (acc, x) => acc + x
		const produced = toArray(reduce(add)(fromArray(array)))

		assert.deepEqual(produced[produced.length - 1], array.reduce(add))
	})
})
