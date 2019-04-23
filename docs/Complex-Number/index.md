# Complex-Number
The `M.Complex()` allows to do various complex number related operations.

### Syntax
> new M.Complex(argument1, argument2)

### Argument1
> Number

### Argument2
> Number

### Return
> Object

### Examples
```js
const a = new M.Complex(3, 2);
```

### Info
> Implemented using JavaScript's built-in `class`

### Properties
- **re** - Returns the real value of the complex number.
- **img** - Returns the imaginary value of the complex number.
- **conj** - Returns an object which is the conjugate of the given complex number.

------

### Examples
- Valid:
	```js
    const a = new M.Complex(3, 2);
    const b = new M.Complex(2, 1);

    console.log(a.re)      // 3
    console.log(a.im)      // 2
    console.log(a.conj)     // Complex { r: 3, i: -2 }
    console.log(a.conj.re)     // 3
    console.log(a.conj.im)     // -2
    ```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'Complex()'  only accepts an integer or an object
	 */
	M.Complex("4", "3");
    M.Complex([3]);
	M.Complex(["13", "21"]);
	```

### Methods
- **abs** - Returns a number which is the absolute value of the complex number.
- **add** - Returns an object after adding either two complex numbers or a complex number with real number or a complex number with an imaginary number.
- **sub** - Returns an object after subtracting either two complex numbers or a complex number with real number or a complex number with an imaginary number.
- **multiply** - Returns an object after multiplying either two complex numbers or a complex number with real number or a complex number with an imaginary number.
- **divide** - Returns an object after dividing either two complex numbers or a complex number with real number or a complex number with an imaginary number.

------

###### Syntax
> a.abs()

###### Return
> Number

### Examples
	```js
    const a = new M.Complex(3, 2);
   
    console.log(a.abs());     // 3.61
	```

### Info:
Implemented using JavaScript's built-in `parseFloat`, `sqrt`, `pow` functions.

------

###### Syntax
> a.add(b)

###### Arguments
> Object

###### Return
> Object

### Examples
- Valid:
	```js
    const add1 = a.add(5)

    console.log(add1)      // Complex { r: 8, i: 2 }
    console.log(add1.re)      // 8
    console.log(add1.im)     // 2

    const add2 = a.add(b)

    console.log(add2.re)      // 5
    console.log(add2.im)      // 3
    console.log(add2.abs())     // 5.83
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'add()'  only accepts an integer or an object
	 */
	const add2 = a.add("5");
    const add2 = a.add([5]);
	```

### Info:
Implemented using JavaScript's built-in `isInteger` functions.

------

###### Syntax
> a.sub(b)

###### Arguments
> Object

###### Return
> Object

### Examples
- Valid:
	```js
    const sub1 = a.sub(1)

    console.log(sub1)      // Complex { r: 2, i: 2 }
    console.log(sub1.re)      // 2
    console.log(sub1.im)     // 2

    const sub2 = a.sub(b)

    console.log(sub2.re)      // 1
    console.log(sub2.im)      // 1
    console.log(sub2.abs())     // 1.41
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'sub()'  only accepts an integer or an object
	 */
	const sub2 = a.sub("5");
    const sub2 = a.sub([5]);
	```

### Info:
Implemented using JavaScript's built-in `isInteger` functions.

------

###### Syntax
> a.multiply(b)

###### Arguments
> Object

###### Return
> Object

### Examples
- Valid:
	```js
    const mul1 = a.multiply(1)

    console.log(mul1)      // Complex { r: 2, i: 2 }
    console.log(mul1.re)      // 2
    console.log(mul1.im)     // 2

    const mul2 = a.multiply(b)

    console.log(mul2)      // Complex { r: 4, i: 7 }
    console.log(mul2.re)      // 4
    console.log(mul2.im)      // 7
    console.log(mul2.abs())     // 8.06
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'multiply()'  only accepts an integer or an object
	 */
	const mul2 = a.multiply("5");
    const mul2 = a.multiply([5]);
	```

### Info:
Implemented using JavaScript's built-in `isInteger` functions.

------

###### Syntax
> a.divide(b)

###### Arguments
> Object

###### Return
> Object

### Examples
- Valid:
	```js
    const div1 = a.divide(2)

    console.log(div1)      // Complex { r: 1.5, i: 1 }
    console.log(div1.re)      // 1.5
    console.log(div1.im)     // 1

    const div2 = a.divide(b)

    console.log(div2)      // Complex { r: 1.6, i: 0.2 }
    console.log(div2.re)      // 1.6
    console.log(div2.im)      // 0.2
    console.log(div2.abs())     // 1.61
	```
- Invalid:
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'divide()'  only accepts an integer or an object
	 */
	const div2 = a.divide("5");
    const div2 = a.divide([5]);
	```

### Info:
Implemented using JavaScript's built-in `isInteger` functions.

------
