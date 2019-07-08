var assert = require('assert')
var fromArray = require('../fromArray')
var toArray = require('../toArray')
var slice = require('../slice')

describe('slice', function () {
	it('should slice from 2nd to 4th', function() {
		const array = [0,1,2,3,4,5,6]

		assert.deepEqual(toArray(slice(2, 4)(fromArray(array))), array.slice(2, 4))
	})
	it('should slice from 4th to last, to 2nd to last', function() {
		const array = [0,1,2,3,4,5,6]

		assert.deepEqual(toArray(slice(-4, -2)(fromArray(array))), array.slice(-4, -2))
	})
	it('should use feedback mechanism', function() {
		const feed = [true, false, true, true, false]
		function* negator () {
			let last = true
			while (true) {
				last = !(yield last)
			}
		}

		assert.deepEqual(toArray(slice(0, 5)(negator(), fromArray(feed))), [true].concat(feed.map(x => !x)))
	})

})
