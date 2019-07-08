var assert = require('assert')
var fromArray = require('../fromArray')
var toArray = require('../toArray')
var map = require('../map')

describe('map', function () {
	it('should duplicate an array', function() {
		const array = [0, 1, 2, 3, 4, 5, 6]
		const duplicate = (x) => 2 * x

		assert.deepEqual(toArray(map(duplicate)(fromArray(array))), array.map(duplicate))
	})
})
