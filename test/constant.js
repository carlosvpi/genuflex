var assert = require('assert')
var constant = require('../constant')

describe('constant', function () {
	it('should always yield the passed constant (one)', function() {
		const value = 1
		const constant1 = constant(value)
		assert.equal(constant1.next().value, value)
		assert.equal(constant1.next().value, value)
		assert.equal(constant1.next().done, false)
	})
	it('should always yield the passed constant (another one)', function() {
		const value = "value"
		const constant1 = constant(value)
		assert.equal(constant1.next().value, value)
		assert.equal(constant1.next().value, value)
		assert.equal(constant1.next().done, false)
	})
})
