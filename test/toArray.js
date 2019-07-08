var assert = require('assert')
var fromArray = require('../fromArray')
var toArray = require('../toArray')
var compact = require('../compact')

describe('toArray', function () {
	it('should compactify an array', function() {
		const array = [0, 1, null, undefined, "string", {key: "value"}]

		assert.deepEqual(toArray(fromArray(array)), array)
	})
})
