var assert = require('assert')
var fromArray = require('../fromArray')
var toArray = require('../toArray')
var mirror = require('../mirror')
var slice = require('../slice')

describe('mirror', function () {
	it('should mirror a generator', function() {
		const g = function* (value) {
			let feed
			while (true) {
				value++
				feed = yield value
				assert.equal(value, feed)
			}
		}
		slice(0, 10)(mirror(g(42)))
	})
})
