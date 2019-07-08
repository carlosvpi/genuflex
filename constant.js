const constant = function* constant (c) {
    while (true) {
        yield c
    }
}

module.exports = constant
