const toArray = (generator) => {
    let array = []
    let next
    
    while (!(next = generator.next()).done) {
        array.push(next.value)
    }

    return array
}

module.exports = toArray
