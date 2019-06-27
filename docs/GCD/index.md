# GCD
The `M.gcd()` function returns the gcd of two or more numbers. If one or both numbers is negative, the result will still be positive. If one or both numbers are decimals, the gcd will be returned to a maximum of 10 decimal places, however both numbers cannot have more than 16 digits.

### Syntax
> M.gcd([value1, value2, ...])

### Arguments
> Array \<Number\>

### Return
> Number

### Examples
- Valid:
	```js
	M.gcd([12, 18, 24]);   					// 6
	M.gcd([8, 7]);         					// 1
	M.gcd(-20, 24);		   					// 4
	M.gcd([1.1, 5.5]); 	   					// 1.1
	M.gcd([923.2398423, 9497853.2249])		//0.0000001
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'gcd()' only accept an array of real numbers!
	 */
	
	M.gcd([NaN, 5, Infinity]);
	M.gcd(['foo', 'bar']);
	```

### Info:
Implemented using JavaScript's built-in `reduce` function.

------
