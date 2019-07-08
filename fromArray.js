const fromArray = function* fromArray (array) {
    for (let index in array) {
        yield array[index]
    }
}

export default fromArray
