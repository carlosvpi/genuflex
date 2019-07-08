var assert = require('assert')
var fromArray = require('../fromArray')
var toArray = require('../toArray')
var every = require('../every')

describe('every', function () {
	it('should take every element of generators', function() {
		const numbers = [0, 1, 2, 3, 4]
		const names = ['luke', 'leia', 'han']
		const expected = [[ 0, 'luke' ], [ 1, 'leia' ], [ 2, 'han' ]]

		assert.deepEqual(toArray(every(fromArray(numbers), fromArray(names))()), expected)
	})
})
