# Abs
The `M.abs()` function returns the absolute value of a Number, Array, String, or Complex Object.

### Syntax
> M.abs(value)

### Arguments
> Numbers</br>
> Strings</br>
> Arrays \<Number\>  \<Array\></br>
> Objects \<Complex\>

### Return
> Number </br>
> String  (in case of string inputs)</br>

### Examples
- Valid:
    ```js
    M.abs(-14);    // 14
    M.abs(-12.24);  // 12.24
    M.abs('-20');   // '20'
    M.abs([12, 9]]);      // 0
    M.abs([[3, 2], [5, 4]]);     // 2

    //const a = new M.Complex(7, 3);
    //const b = new M.Complex(4, 6);

    M.abs(a);     // 7.62
    ```
- Invalid:
    ```js
  /*
  * TypeError: Invalid argument received: <argument>
  */
   M.abs(true, false);

  /*
   * TypeError: Invalid argument received: <argument>
  */
    M.abs();
    M.abs(1, 3);
    M.abs('4', '3');
    M.abs([5, 3, 4], [1, 2, 3]);
    M.abs([[5]], [[4]]);
    M.abs(a, b);
    /*
    * TypeError: Invalid argument received: <argument>
    * 'function' only accepts parameters of similar length!
    */

    /*Arrays*/
    M.abs([1,2,3,4,5], [1,2,3,4]);
    M.abs([[1]], [[1,2,3]]);

    ```

### Info:

Implemented using JavaScript's built-in `reduce`, `forEach`, `toString`, `filter`, `map` function.

