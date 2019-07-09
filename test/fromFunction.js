var assert = require('assert')
var fromArray = require('../fromArray')
var fromFunction = require('../fromFunction')
var toArray = require('../toArray')
var slice = require('../slice')
var mirror = require('../mirror')
var map = require('../map')

describe('fromFunction', function () {
	it('should create a fibonacci generator', function() {
		const fibonacci = ([x, y]) => [y, x + y]

		assert.deepEqual(toArray(map(([m]) => m)(slice(0, 10)(mirror(fromFunction(fibonacci, [0,1]))))), [1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
	})
})
