# Average
The `M.convert()` function returns a number which has been converted from degree to radian or vice versa.

### Syntax
> M.permute(argument1, argument2, argument3)

### Argument1
> Number

### Argument2
> Object

### Argument3
> Number

### Return
> Number

### Examples
- Valid:
	```js
    M.convert(60, {from: 'degree', to: 'radian'})   // 1.0471975511965976
    M.convert(1.0471975511965976, {from: 'radian', to: 'degree'})   // 59.99999999999999
    M.convert(180, {from: 'degree', to: 'radian'}, 0)   // 3.141592653589793
    M.convert(180, {from: 'degree', to: 'radian'}, 8)   // 3.14159265
    M.convert(1.309, {from: 'radian', to: 'degree'})   // 75.00017538262475
    M.convert(1.309, {from: 'radian', to: 'degree'}, 0)   // 75.00017538262475
    M.convert(1.309, {from: 'radian', to: 'degree'}, 6)   // 75.000175
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'convert()' only accept a number!
	 */
	M.convert("31", {from: 'degree', to: 'radian'});
    M.convert(true, {from: 'degree', to: 'radian'});

    /*
	 * TypeError: Invalid argument received: <argument>
	 * in convert() must be an object!
	 */
    M.convert(60, true, 6);

    /*
	 * ReferenceError: Invalid argument received: <argument>
	 * in convert() must contain to and from fields!
	 */
    M.convert(180, {from: 'radian', an: 'degree'});
    M.convert(180, {a: 'radian', an: 'degree'}, 6);

    /*
	 * TypeError: Invalid argument received: <argument>
	 * 'convert()' only accept a non-negative integer!
	 */
	M.convert(31, {from: 'degree', to: 'radian'}, true);
    M.convert(60, {from: 'degree', to: 'radian'}, 'a');

	```

### Info:
Implemented using JavaScript's built-in `parseFloat`,`toFixed`,`hasOwnProperty` functions.

------
