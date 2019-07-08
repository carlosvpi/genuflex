var assert = require('assert')
var fromArray = require('../fromArray')
var toArray = require('../toArray')
var reject = require('../reject')

describe('reject', function () {
	it('should reject even numbers', function() {
		const array = [0,1,2,3,4,5,6]
		const isEven = x => x % 2 === 0

		assert.deepEqual(toArray(reject(isEven)(fromArray(array))), array.filter((x) => !isEven(x)))
	})
})
