var assert = require('assert')
var fromArray = require('../fromArray')
var toArray = require('../toArray')
var feedback = require('../feedback')

describe('feedback', function () {
	it('should feed a generator', function() {
		pickArray = [5,3,1,4,0,2]
		array = ['1','2','3','4','5','6']
		const feedbackGenerator = fromArray(pickArray)
		const generator = function* (index) {
			while (index !== undefined) {
				index = yield array[index]
			}
		}
		assert.deepEqual(toArray(feedback(feedbackGenerator)(generator)), pickArray.map(i => array[i]))
	})
})
