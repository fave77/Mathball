# Maximum
The `M.max()` function returns the maximum of two or more numbers.

### Syntax
> M.max([value1, value2, ...])

### Arguments
> Array \<Number\>

### Return
> Number

### Examples
- Valid:
	```js
	M.max([1, 0, -5, 6]);   // 6
	M.max([8, 7]);         // 8
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'max()' only accept an array of real numbers!
	 */
	M.max(1, 2);
	M.max([NaN, 5, Infinity]);
	M.max(['foo', 'bar'])
	```

### Info:
Implemented using JavaScript's built-in `Math.max()` function.

------
