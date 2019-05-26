# Modular Inverse
The `M.modInv()` function returns the modular inverse of the arguments.

### Syntax
> M.modInv (value1, value2)

### Arguments
> Number

### Return
> Number

### Examples
- Valid:
    ```js
    M.modInv(3, 11);    // 4
    M.modInv(6, 9);     // 0
    M.modInv(10, 17);   // 12
    ```
- Invalid:
    ```js
    /*
     * TypeError: Invalid argument received: <argument>
     * 'modInv()' only accept positive integers!
     */
    M.modInv();
    M.modInv(-20, 10);
    M.modInv(2.4, 3.5);
    M.modInv(true, false);
    M.modInv('helloworld');
    M.modInv({'lorem': 'ipsum', 'hello': 'world'});
    ```

### Info
Implemented using Mathball's built-in 'gcd' function.

------
