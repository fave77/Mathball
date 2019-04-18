# Matrix
The `M.Matrix()` function returns an object upon which various matrix-based operations can be performed.

### Syntax
> new M.Matrix([value1, value2, ...])

### Arguments
> Array \<Number\>

### Return
> Object

### Examples
```js
const x = new M.Matrix([ [1, 2], [3, 4] ]);
```

### Info
> Implemented using JavaScript's built-in `class`

### Methods
- **loc** - returns the element in the matrix of specified row and column number.
- **diag** - returns array of numbers which contains either diagonal or anti-diagonal elements based on the argument.
- **check** - returns a boolean on checking if matrix is square, identity, upper-triangular or lower-triangular.
- **pow** - returns a matrix after multiplying the same matrix, the number of times provided as the argument.

------

###### Syntax
> x.loc([value1, value2])

###### Arguments
> \<Row Number\> , \<Column Number\>

###### Return
> Number

###### Examples
- Valid:
	```js
	const x = new M.Matrix([ [1, 2], [3, 4] ]);
  x.loc(2, 1);   // 3
  x.loc(1, 2);	 // 2
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'loc()' only accept a positive integer!
	 */
	x.loc(0, 2);
	x.loc(0, 0);
	x.loc(2, -1);
	```

###### Info
Only positive numbers should be in the arguments,
because that denotes the row and column number of a matrix.

------

###### Syntax
> x.diag(value)

###### Arguments
> \<'primary'\> or \<'secondary'\>

###### Return
> Array \<Number\>

###### Examples
- Valid:
	```js
	const x = new M.Matrix([ [1, 2], [3, 4] ]);
  x.diag('primary');      // [1, 4]
  x.diag('secondary');    // [2, 3]
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'diag()' only returns diagonals of square matrices!
	 */
	 const x = new M.Matrix([ [1, 2, 5], [3, 4] ]);
	/*
	 * TypeError: Invalid argument received: <argument>
	 */
	x.diag('first');
	x.diag('primar');
	x.diag('secondary');
	```

###### Info:
First it checks, if matrix is square, and then
returns the diagonal as per the correct argument.

------

###### Syntax
> x.check(value)

###### Arguments
> \<'square'\> or \<'identity'\> or \<'upper-triangular'\> or \<'lower-triangular'\>

###### Return
> Boolean

###### Examples
- Valid:
	```js
	const x = new M.Matrix([ [1, 2], [3, 4] ]);
  x.check('square');             // true
  x.check('identity');           // false
  x.check('upper-triangular');   // false
  x.check('lower-triangular');   // false
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * the matrix has to be square to check 'identity' property!
	 */
	 const x = new M.Matrix([ [1, 2, 5], [3, 4] ]);
	/*
	 * TypeError: Invalid argument received: <argument>
	 * the matrix has to be square to check 'upper-triangular' property!
	 */
	 const x = new M.Matrix([ [1, 2, 5], [3, 4] ]);
	 /*
	 * TypeError: Invalid argument received: <argument>
	 * the matrix has to be square to check 'lower-triangular' property!
	 */
	 const x = new M.Matrix([ [1, 2, 5], [3, 4] ]);
	```

###### Info
First it checks, if matrix is square, and then
returns the diagonal as per the argument.

------

###### Syntax
> x.pow(value)

###### Arguments
> \<Number\>

###### Return
> Matrix

###### Examples
- Valid:
	```js
	const x = new M.Matrix([ [1, 2], [3, 4] ]);
	x.pow(2);  // [ [7, 10], [15, 22] ]

	const x = new M.Matrix([ [1] ]);
	x.pow(3);  // [ [1] ]
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'pow()' only accept a positive integer!
	 */
	 x.pow(-2)
	 x.pow(0)
	```

###### Info
Implemented using `matrixExponentiation()` function.

------

### Additional

###### Matrix Chain Order
> Matrix Chain Order returns the minimum number of multiplications required when the dimension of matrices are provided in order for finding the most efficient way to multiply these matrices together.

###### Syntax
> M.Matrix.chainOrder([value1, value2, ...])

###### Arguments
> Array \<Number\>

###### Return
> Number

###### Examples
- Valid:
	```js
	M.Matrix.chainOrder([40, 20, 30, 10])  //14000
  M.Matrix.chainOrder([40, 20, 30, 10, 30]);  // 26000
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'chainOrder()' only accept a positive integer!
	 */
	M.Matrix.chainOrder(12) //Error: not an array
  M.Matrix.chainOrder([10, -20, 40, 10]) //Error: not positive integers
	```

###### Info
Only positive numbers should be in the array, because that denotes the number of rows in a matrix.

------
