# Minimum
The `M.min()` function returns the minimum of two or more numbers.

### Syntax
> M.min([value1, value2, ...])

### Arguments
> Array \<Number\>

### Return
> Number

### Examples
- Valid:
	```js
	M.min([1, 0, 5, 6]);   // 0
	M.min([8, 7]);         // 7
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'min()' only accept an array of real numbers!
	 */
	M.min(1, 2);
	M.min([NaN, 5, Infinity]);
	M.min(['foo', 'bar'])
	```

### Info:
Implemented using JavaScript's built-in `Math.min()` function.

------
