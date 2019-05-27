# Modular Exponentiation
The `M.pow()` function returns the modular exponent of the arguments.

### Syntax
> M.pow (base, expo, modulo)

### Arguments
> Number

### Return
> Number

### Examples
- Valid:
    ```js
    M.pow (6, 3, 5);    // 1
    M.pow (8, 4, 5);     // 1
    M.pow (5, 3);   // 25
    ```
- Invalid:
    ```js
    /*
     * TypeError: Invalid argument received: <argument>
     * 'pow ()' only accept a non-negative integer!
     */
    M.pow ();
    M.pow(-10);
    M.pow (20, 5, -9);
    M.pow (2.4, 3.5);
    M.pow (true, false);
    M.pow ('31', '45', '2');
    ```

### Info
Implemented using JavaScript's basic arithmetic operations.

------
