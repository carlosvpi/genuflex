const fromFunction = function* fromFunction (f, init) {
    let args = init

    while (true) {
    	args = yield f(args)
    }
}

module.exports = fromFunction
