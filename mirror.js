const mirror = function* mirror (generator) {
    let next = generator.next()

    do {
    	yield next.value
    } while (!(next = generator.next(next.value)).done)
}

module.exports = mirror
