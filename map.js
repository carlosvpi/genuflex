const map = (f) => function* map (generator) {
    let next
    let feedback
    let i = 0
    
    while (!(next = generator.next(feedback)).done) {
        feedback = yield f(next.value, i++, generator)
    }
}

module.exports = map
