const fs = require('fs')
const minify = require('minify')

const files = [
	'compact',
	'constant',
	'every',
	'feedback',
	'filter',
	'forEach',
	'fromArray',
	'fromFunction',
	'map',
	'mirror',
	'nil',
	'range',
	'reduce',
	'reject',
	'slice',
	'some',
	'takeWhile',
	'toArray'
]

files.forEach((file) => {
	minify(`${file}.js`).then((stream) => {
		return fs.writeFile(`min/${file}.min.js`, stream, (err) => {
			if (err) {
				return console.error(err)
			}
			console.log(`Minified: ${file}.js`)
		})
	}).catch(console.error)
})