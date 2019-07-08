var assert = require('assert')
var fromArray = require('../fromArray')
var toArray = require('../toArray')
var some = require('../some')

describe('some', function () {
	it('should take some element of generators', function() {
		const numbers = [0, 1, 2, 3, 4]
		const names = ['luke', 'leia', 'han']
		const expected = [[ 0, 'luke' ], [ 1, 'leia' ], [ 2, 'han' ], [ 3, undefined ], [ 4, undefined ]]

		assert.deepEqual(toArray(some(fromArray(numbers), fromArray(names))()), expected)
	})
})
