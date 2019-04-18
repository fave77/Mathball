# Average
The `M.permute()` function returns all permutations of the given string.

### Syntax
> M.permute("value")

### Arguments
> String

### Return
> Array

### Examples
- Valid:
	```js
    M.permute("abc")   // "abc","acb","bac","bca","cab","cba"
    M.permute("123")   // "123","132","213","231","312","321"
    M.permute("4")   // "4"
    M.permute("a")   // "a"
    M.permute("15")   // "15","51"
    M.permute("ab")   // "ab","ba"
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'permute()' only accept a string!
	 */
	M.permute(123);
    M.permute(-20);
    M.permute(0.254);
	M.permute(["foo", "bar"]);
	```

### Info:
Implemented using JavaScript's built-in `split`,`shift`,`splice`,`push`,`map`,`filter`,`sort`,`join`,`indexOf` functions.

------
