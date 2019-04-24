# Sub
The `M.sub()` function returns the difference of two Numbers, Arrays, Strings, or Complex Objects.

### Syntax
> M.sub(value1, value2)

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
	M.sub(50, 29);    // 21
    M.sub(4.5, 2.3);  // 2.2
    M.sub('20', '10');   // '10'
    M.sub([12, 4], [2, 3]);      // [10, 1]
    M.sub([[5, 3]], [[4, 1]]);     // [[1, 2]]

    //const a = new M.Complex(7, 3);
    //const b = new M.Complex(4, 6);

    M.sub(a,b);             // {re: 3, im: -3}
	```
- Invalid:
	```js
    /*
	 * TypeError: Invalid argument received: <argument>
	 */
    M.sub(true, false);

    /*
	 * TypeError: Invalid argument received: <argument>
	 * 'sub()' only accepts only 2 parameters!
	 */
	M.sub();
    M.sub(1);
    M.sub(1.3);
    M.sub('4');
	M.sub([5, 3, 4]);
    M.sub([[5]]);

    /*
	 * TypeError: Invalid argument received: <argument>
	 * 'function' only accepts parameters of similar types!
	 */

    /*Numbers*/
    M.sub(5, '1');
    M.sub(1.2, '2');

    /*Strings*/
    M.sub('6', 1);

    /*Arrays*/
    M.sub([1,2,3,4], ['1','2','3','4']);
    M.sub([[1, 2]], [['4', '5']]);

    /*Complex Objects*/

    M.sub(a, b, {p: 30, q: 40});

    /*
	 * TypeError: Invalid argument received: <argument>
	 * 'function' only accepts parameters of similar length!
	 */

    /*Arrays*/
    M.sub([1,2,3,4,5], [1,2,3,4]);
    M.sub([[1]], [[1,2,3]]);

	```

### Info:
Implemented using JavaScript's built-in `reduce`, `forEach`, `toString`, `filter`, `map` function.

