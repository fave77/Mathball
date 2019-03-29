# Sum
The `M.lcm()` function returns the lcm of two or more numbers.

### Syntax
> M.lcm([value1, value2, ...])

### Arguments
> Array \<Number\>

### Return
> Number

### Examples
- Valid:
	```js
	M.lcm([2, 3, 5, 15]);   // 30
	M.lcm([8, 7]);         // 56
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'lcm()' only accept an array of positive real numbers!
	 */
	M.lcm([-40,8]);
	M.lcm([NaN, 5, Infinity]);
	M.lcm(['foo', 'bar']);
	```

### Info:
Implemented using JavaScript's built-in `reduce` function.

------
