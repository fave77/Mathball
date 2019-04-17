# Count
The `M.count()` function returns the number of occurences of the second argument in the first argument.

### Syntax
> M.count (argument1, argument2)

### Argument1
> Array
> String
> Object

### Argument2
> Any datatype

### Return
> Number

### Examples
- Valid:
    ```js
    /*Arrays*/
    M.count([1, 2, 3, 1, 2, 4, 5, 1], 1)   // 3
    M.count(['a', 'y', 'a', 'b', 'c', 'z', 'i'], 'a')   // 2
    M.count(['hello', 'world', 'lorem', 'ipsum', 'hello'], 'world');   // 1
    M.count(['hello', 5, 'lorem', 7, 'ipsum', 'hello'], 'world');   // 0
    M.count([true, 5, 'lorem', 7, 'ipsum', 'hello'], true);   // 1

    /*Strings*/
    M.count('banana', 'ana');   // 2
    M.count('banana', 'an');    // 2
    M.count('banana', 'a');     // 3

    /*Objects*/
    M.count({'lorem': 'ipsum', 'hello': 'world'}, 'world');    // 1
    M.count({'foo': 'bar', 'spam': 'egg', 'lorem': 'bar'}, 'bar');   // 2
    M.count({'ipsum': [true, 1]}, [true, 1]);    // 1
    ```
- Invalid:
    ```js
    /*
     * TypeError: Invalid argument received: <argument>
     * 'count()' only accept an Array, String or an Object!
     */
    M.count();
    M.count(true);
    M.count(23);

    /*
     * TypeError: Invalid argument received: <argument>
     * 'count()' doesnot accept more than 2 parameters!
     */

    ```

### Info:
Implemented using JavaScript's built-in `filter`, `hasOwnProperty`, `indexOf`, `keys` functions.

------

