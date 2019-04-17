# Count
The `M.length()` function returns the length of argument provided.

### Syntax
> M.length (value)

### Arguments
> Number
> Array
> String
> Object

### Return
> Number

### Examples
- Valid:
    ```js
    M.length(2345);         // 4
    M.length(123.456);      // 6
    M.length([1, 2, 3, 1, 2, 4, 5, 1]);   // 8
    M.length('helloworld');  // 10
    M.length({'lorem': 'ipsum', 'hello': 'world'});    // 2
    ```
- Invalid:
    ```js
    /*
     * TypeError: Invalid argument received: <argument>
     * 'length()' only accept either a real number,
     *  string, object or array!
     */
    M.length();
    M.length(true);
    ```

### Info:
Implemented using JavaScript's built-in `split`, `toString`, `splice`,
`indexOf`, `keys` functions

------

