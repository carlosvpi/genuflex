const forEach = (f) => (generator) => {
    let next
    
    while (!(next = generator.next()).done) {
        f(next.value)
    }
}

module.exports = forEach
