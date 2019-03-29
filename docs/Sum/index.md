# Sum
The `M.sum()` function returns the sum of two or more numbers.

### Syntax
> M.sum([value1, value2, ...])

### Arguments
> Array \<Number\>

### Return
> Number

### Examples
- Valid:
	```js
	M.sum([1, 0, 5, 6]);   // 12
	M.sum([8, 7]);         // 15
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'sum()' only accept an array of real numbers!
	 */
	M.sum(1, 2);
	M.sum([NaN, 5, Infinity]);
	M.sum(['foo', 'bar']);
	```

### Info:
Implemented using JavaScript's built-in `reduce` function.

------
