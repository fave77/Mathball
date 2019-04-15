# Median
The `M.median()` function returns the median of the numbers provided.

### Syntax
> M.median([value1, value2, ...])

### Arguments
> Array \<Number\>

### Return
> Number

### Examples
- Valid:
	```js
	M.median([1, 3, 4, 2, 6, 5, 8, 7]);   // 4.5
	M.median([4, 4, 4, 4]);         // 4
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'median()' only accept an array of real numbers!
	 */
	M.median(1, 2);
	M.median([NaN, 5, Infinity]);
	M.median(['foo', 'bar']);
	```

### Info:
Implemented using JavaScript's built-in `Math.sort()`
`Math.floor()` function.

------
