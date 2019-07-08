var assert = require('assert')
var fromArray = require('../fromArray')
var toArray = require('../toArray')
var forEach = require('../forEach')

describe('forEach', function () {
	it('should count an array', function() {
		let value = 0
		const array = [0, 1, 2, 3, 4, 5, 6]
		const f = (item) => value += item

		forEach(f)(fromArray(array))
		assert.deepEqual(value, array.reduce((acc, item) => acc + item, 0))
	})
})
