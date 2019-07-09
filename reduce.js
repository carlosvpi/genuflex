const reduce = (f, init) => function* reduce (generator) {
    let feedback
    let next
    let i = 0
    let acc = init !== undefined ? init : generator.next(feedback).value

    while (!(next = generator.next(feedback)).done) {
    	acc = f(acc, next.value, i++, generator)
        feedback = yield acc
    }
}

module.exports = reduce
