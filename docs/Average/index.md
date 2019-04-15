# Average
The `M.avg()` function returns the average of the numbers provided.

### Syntax
> M.avg([value1, value2, ...])

### Arguments
> Array \<Number\>

### Return
> Number

### Examples
- Valid:
	```js
	M.avg([1, 0, 5, 6]);   // 3
	M.avg([8, 7]);         // 7.5
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'avg()' only accept an array of real numbers!
	 */
	M.avg(1, 2);
	M.avg([NaN, 5, Infinity]);
	M.avg(['foo', 'bar']);
	```

### Info:
Implemented using JavaScript's built-in `reduce` function.

------
