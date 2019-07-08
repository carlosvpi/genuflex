var assert = require('assert')
var nil = require('../nil')

describe('nil', function () {
	it('should always yield null', function() {
		assert.equal(nil.next().value, null)
		assert.equal(nil.next().value, null)
		assert.equal(nil.next().done, false)
	})
})
