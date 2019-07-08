var assert = require('assert')
var toArray = require('../toArray')
var range = require('../range')

describe('range', function () {
	it('should create a range of 10 numbers', function() {
		assert.deepEqual(toArray(range(0, 10, 2)), [0, 2, 4, 6, 8])
	})
})
