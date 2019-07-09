const takeWhile = (p) => function* takeWhile (generator) {
	let next
	while (!(next = generator.next()).done) {
		if (p(next.value)) {
			yield next.value
		} else {
			return
		}
	}
}

module.exports = takeWhile