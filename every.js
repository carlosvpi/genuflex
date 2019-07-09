const every = function* (...generators) {
    let next = generators.map(generator => generator.next())
    
    while (!next.reduce((acc, { done }) => acc || done, false)) {
        yield next.map(({ value }) => value)
        next = generators.map(generator => generator.next())
    }

    return next
}

module.exports = every
