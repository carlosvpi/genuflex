var assert = require('assert')
var fromArray = require('../fromArray')
var toArray = require('../toArray')
var filter = require('../filter')

describe('filter', function () {
	it('should filter even numbers', function() {
		const array = [0,1,2,3,4,5,6]
		const isEven = x => x % 2 === 0

		assert.deepEqual(toArray(filter(isEven)(fromArray(array))), array.filter(isEven))
	})
})
