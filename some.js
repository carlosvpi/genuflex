const some = function* (...generators) {
    let next = generators.map(generator => generator.next())
    
    while (!next.reduce((acc, { done }) => acc && done, true)) {
        yield next.map(({ value }) => value)
        next = generators.map(generator => generator.next())
    }
}

module.exports = some
