var assert = require('assert')
var fromArray = require('../fromArray')
var toArray = require('../toArray')
var takeWhile = require('../takeWhile')

describe('takeWhile', function () {
	it('should take elements until it finds some element < 0', function() {
		const array = [0, 1, 2, -3, 4, 5, 6]

		assert.deepEqual(toArray(takeWhile((x) => x >= 0)(fromArray(array))), [0, 1, 2])
	})
})
