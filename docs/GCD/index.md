# GCD
The `M.gcd()` function returns the gcd of two or more numbers.

### Syntax
> M.gcd([value1, value2, ...])

### Arguments
> Array \<Number\>

### Return
> Number

### Examples
- Valid:
	```js
	M.gcd([12, 18, 24]);   // 6
	M.gcd([8, 7]);         // 1
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'gcd()' only accept an array of positive real numbers!
	 */
	M.gcd(-20, 24);
	M.gcd([NaN, 5, Infinity]);
	M.gcd(['foo', 'bar']);
	```

### Info:
Implemented using JavaScript's built-in `reduce` function.

------
