# Mul
The `M.mul()` function returns the product of two Numbers, Arrays, Strings, or Complex Objects.

### Syntax
> M.mul(value1, value2)

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
	M.mul(2, 3);    // 6
    M.mul(4.5, 2.3);  // 10.35
    M.mul('20', '10');   // '200'
    M.mul([12, 9], [6, 6]);      // [72, 54]
    M.mul([[1,2], [3,4]], [[2, 0], [1, 2]]);     // [[4, 4], [10, 8]]

    //const a = new M.Complex(7, 3);
    //const b = new M.Complex(4, 6);

    M.mul(a,b);             // {re: 28, im: 18}
	```
- Invalid:
	```js
    /*
	 * TypeError: Invalid argument received: <argument>
	 */
    M.mul(true, false);

    /*
	 * TypeError: Invalid argument received: <argument>
	 * 'mul()' only accepts only 2 parameters!
	 */
	M.mul();
    M.mul(1);
    M.mul(1.3);
    M.mul('4');
	M.mul([5, 3, 4]);
    M.mul([[5]]);
    /*
     * TypeError: Invalid argument received: <argument>
     * 'function' only accepts parameters of similar types!
     */

    /*Numbers*/
    M.mul(5, '1');
    M.mul(1.2, '2');

    /*Strings*/
    M.mul('6', 1);

    /*Arrays*/
    M.mul([1,2,3,4], ['1','2','3','4']);
    M.mul([[1, 2]], [['4', '5']]);

    /*Complex Objects*/

    M.mul(a, b, {p: 30, q: 40});

    /*
     * TypeError: Invalid argument received: <argument>
     * 'function' only accepts parameters of similar length!
     */

    /*Arrays*/
    M.mul([1,2,3,4,5], [1,2,3,4]);
    M.mul([[1]], [[1,2,3]]);

    ```

### Info:
Implemented using JavaScript's built-in `reduce`, `forEach`, `toString`, `filter`, `map` function.

