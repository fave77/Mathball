# Add
The `M.add()` function returns the sum of two or more Numbers, Arrays, Strings, or Complex Objects.

### Syntax
> M.add(value1, value2, ...)

### Arguments
> Numbers</br>
> Strings</br>
> Arrays \<Number\>  \<Array\></br>
> Objects \<Complex\>

### Return
> Number  (in case of number inputs)</br>
> String  (in case of string inputs)</br>
> Array   (in case of array inputs)</br>
> Object  (in case of object inputs)

### Examples
- Valid:
	```js
	M.add(1, 2, 3, 4, 5, 6);    // 21
    M.add(1.2, 2.3, 3.4, 4.5);  // 11.4
    M.add('1', '2, '3', '4');   // '10'
    M.add([2, 4], [2, 4]);      // [4, 8]
    M.add([[1, 2, 3]], [[1, 2, 3]]);   // [[2, 4, 6]]
	```
- Invalid:
	```js
    /*
	 * TypeError: Invalid argument received: <argument>
	 */
    M.add(true, false);

    /*
	 * TypeError: Invalid argument received: <argument>
	 * 'add()' only accepts 2 or more parameters!
	 */
	M.add();
    M.add(1);
    M.add(1.3);
    M.add('4');
	M.add([5, 3, 4]);
    M.add([[5]]);

    /*
	 * TypeError: Invalid argument received: <argument>
	 * 'function' only accepts parameters of similar types!
	 */

    /*Numbers*/
    M.add(5, 2, '1', 7);
    M.add(1.2, 1.4, [1,2,3], 5.6);

    /*Strings*/
    M.add('1', '2', '3', 4, 5);

    /*Arrays*/
    M.add([1,2,3,4], ['1','2','3','4']);
    M.add([[1, 2]], [[3, 4]], [['4', '5']]);

    /*Complex Objects*/

    //const a = new M.Complex(4,3);
    //const b = new M.Complex(5,4);
    M.add(a, b, {p: 30, q: 40});

    /*
	 * TypeError: Invalid argument received: <argument>
	 * 'function' only accepts parameters of similar length!
	 */

    /*Arrays*/
    M.add([1,2,3,4,5], [1,2,3,4]);
    M.add([[1]], [[1,2,3]], [[8]]);

	```

### Info:
Implemented using JavaScript's built-in `reduce`, `forEach`,
`toString`, `filter`, `map` function.

