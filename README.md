# regenerator
Utility functions for generators

## Install

```bash
$ yarn add regenerator
```

## Documentation

### `compact: Generator T -> Generator T`

Generates the same items as `g` except those null or undefined.

```javascript
	const array = [0, 1, 2, null, 3, undefined, 5]

	compact(fromArray(array))
	// 0, 1, 2, 3, 5
```

### `constant: T -> Generator T`

Generates the same value (its parameter) forever.

```javascript
	constant(5)
	// 5, 5, 5, ...
```

### `every: [Generator T] -> Generator [T]`

Generates a list with all the values produced by the generators passed by parameters.
Only ends when all its parameters end.

```javascript
	const numbers = fromArray([1,2,3,4])
	const names = fromArray(['luke','leia','han'])
	every(numbers, names)
	// [1,'luke'], [2,'leia'], [3,'han'], [4,undefined]
```

### `feedback: Generator (T -> Q) -> (Q -> Generator (Q -> T)) -> Generator (T -> T)`

WIP

### `filter: (T -> Bool) -> Generator T -> Generator T`

Generates a those items of a generator that fulfill a certain predicate.

```javascript
	const isEven = x => x % 2 === 0
	const numbers = fromArray([1,2,3,4])
	filter(isEven)(numbers)
	// 2, 4
```

### `forEach: (T -> Q) -> Generator T -> Nil`

Applies a function to each item of a generator

```javascript
	const numbers = fromArray([1,2,3,4])
	forEach(console.log)(numbers)
	// prints 1, 2, 3, 4
```

### `fromArray: [T] -> Generator T`

Produces in order all the elements of an array

```javascript
	const numbers = fromArray([1,2,3,4])
	fromArray(numbers)
	// 1, 2, 3, 4
```

### `fromFunction: ((T -> T), T) -> Generator T`

Produces the value returned by a function applied to, first, an initial value (given as a parameter), and consecutively by the previously produced values.

```javascript
	const fibonacci = ([x, y]) => [y, x + y]
	const gFibo = fromFunction(fibonacci, [0, 1])
	let next = gFibo.next()
	while (true) {
		next = gFibo.next(next.value)
	}
	// [0, 1], [1, 1], [1, 2], [2, 3], [3, 5], [5, 8], ...
```

### `map: (T -> Q) -> Generator T -> Generator Q`

Produces the result of applying a function to each value produced by a given generator.

```javascript
	const g = fromArray([1,2,3,4])
	const duplicate = (x) => x * 2
	map(duplicate)(g)
	// 2, 4, 6, 8
```

### `mirror: Generator T -> Generator Q`

Feeds a generator with its own produced values

```javascript
	const fibonacci = ([x, y]) => [y, x + y]
	mirror(fromFunction(fibonacci, [0, 1]))(g)
	// [0, 1], [1, 1], [1, 2], [2, 3], [3, 5], [5, 8], ...
```

### `nil: Generator Nil`

Always produces null

```javascript
	nil
	// null, null, ...
```

### `range (start: Number, end: Number, step: Number) -> Generator Number`

Produces all the numbers from start to end (excluded) with the given step

```javascript
	range(1,10,3)
	// 1, 4, 7
```

### `reduce (reductor: (T, T) -> T, init: T) -> Generator T -> Generator T`

Produces the accumulated value, resulting from applying a function to the previously accumulated value and the value produced by a generator

```javascript
	reduce((a, b) => a + b)(fromArray([1,2,3,4]))
	// 1, 3, 6, 10
```

### `reject: (T -> Bool) -> Generator T -> Generator T`

Generates a those items of a generator that do not fulfill a certain predicate.

```javascript
	const isEven = x => x % 2 === 0
	const numbers = fromArray([1,2,3,4])
	reject(isEven)(numbers)
	// 1, 3
```

### `slice (start: Number, end: Number) -> Generator T -> Generator T`

Discards the first _n_ items of a generator and produces the next _m_ (end not included). Negative values on the indexes represent indexes from the end.

```javascript
	const numbers = range(0, 10)
	slice(2, 4)(numbers)
	// 2, 3
```

### `some: [Generator T] -> Generator [T]`

Generates a list with all the values produced by the generators passed by parameters.
Ends when the first of its parameters ends.

```javascript
	const numbers = fromArray([1,2,3,4])
	const names = fromArray(['luke','leia','han'])
	some(numbers, names)
	// [1,'luke'], [2,'leia'], [3,'han']
```

### `takeWhile: (T -> Q) -> Generator T -> Generator T`

Generates a the values produced by another generators until said value fails to fulfil a predicate, moment in which this generator ends.

```javascript
	const numbers = fromArray([1,2,3,4,5])
	const lessThan4 = (x) => x < 4
	takeWhile(lessThan4, numbers)
	// 1, 2, 3
```

### `toArray: Generator T -> [T]`

Returns an array with all the items produced by a generator.

```javascript
	const numbers = fromArray([1,2,3,4,5])
	toArray(numbers)
	// [1, 2, 3, 4, 5]
```