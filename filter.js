const filter = (p) => function* filter (generator) {
    let next
    let feedback
    
    while (!(next = generator.next(feedback)).done) {
        if (p(next.value)) {
            feedback = yield next.value
        }
    }
}

module.exports = filter
