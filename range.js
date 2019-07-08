const range = function* range (start = 0, end = 1, step = 1) {
    while (start < end) {
        yield start
        start += step
    }
}

module.exports = range
