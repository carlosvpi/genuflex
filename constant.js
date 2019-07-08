const constant = function* constant (c) {
    while (true) {
        yield c
    }
}

export default constant
