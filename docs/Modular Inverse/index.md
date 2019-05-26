# Modular Inverse
The `M.inverse()` function returns the modular inverse of the arguments.

### Syntax
> M.inverse (value1, value2)

### Arguments
> Number

### Return
> Number

### Examples
- Valid:
    ```js
    M.inverse(3, 11);    // 4
    M.inverse(6, 9);     // 0
    M.inverse(10, 17);   // 12
    ```
- Invalid:
    ```js
    /*
     * TypeError: Invalid argument received: <argument>
     * 'inverse()' only accept positive integers!
     */
    M.inverse();
    M.inverse(-20, 10);
    M.inverse(2.4, 3.5);
    M.inverse(true, false);
    M.inverse('helloworld');
    M.inverse({'lorem': 'ipsum', 'hello': 'world'});
    ```

### Info
Implemented using Mathball's built-in 'gcd' function.

------
