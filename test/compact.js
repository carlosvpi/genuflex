var assert = require('assert')
var fromArray = require('../fromArray')
var toArray = require('../toArray')
var compact = require('../compact')

describe('compact', function () {
	it('should compactify an array', function() {
		const array = [0, 1, 2, null, 3, undefined, 5]

		assert.deepEqual(toArray(compact(fromArray(array))), [0, 1, 2, 3, 5])
	})
})
