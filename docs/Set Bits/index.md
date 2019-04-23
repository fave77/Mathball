# Set Bits
The `M.popcount()` function returns the count of the total number of 1s present in the binary representation of an integer.

### Syntax
> M.popcount(value)

### Arguments
> Number

### Return
> Non-negative Number

### Examples
- Valid:
    ```js
    M.popcount(13);   // 3
    M.popcount(6);         // 2
    ```
- Invalid:
    ```js
    /*
     * TypeError: Invalid argument received: <argument>
     * 'sum()' only accept an integer value.
     */
    M.popcount(1, 2);
    M.popcount('one');
    ```

### Info:
Implemented using JavaScript's `while()` loop.

------

