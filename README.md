# regenerator
Utility functions for generators

## Install

```bash
$ yarn add regenerator
```

## Feedback mechanism

Every regenerator function `h` that consumes generators uses the feedback mechanism to obtain the `next` item of the consumed generators.

The feedback mechanism consists on `h` using another generator called feed, as extra parameter, that produces the items consumed by the `.next()` function of the regularly generators (consumed by `h`). the feed generator's `.next()` function consumes whatever is passed to `h` to get new items.

In other words, if `g` is a generator and `h` consumes `g`, then `h` also consumes another generator `f` in this way:

`{value} = h(g, f).next(v)`: when `h` obtains new items of `g`, it produces them with `g.next(f.next(v))`

## Function documentation

### `compact(g: Generator, f: Generator)`: generates the same items as `g` except those null or undefined

```javascript
	const array = [0, 1, 2, null, 3, undefined, 5]

	compact(fromArray(array)) // [0, 1, 2, 3, 5]
```