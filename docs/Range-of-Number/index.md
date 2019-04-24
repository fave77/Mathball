# range
The `M.range()` takes a type of number as argument such as prime-numbers & returns all those numbers in the range provided as arguments , like `M.range('prime')(1,5)` will return all the prime numbers between 1 & 5.

### Syntax
> M.range('number-type')

### Arguments
> <String>

### Return
> <Function> e.g. rangePrime
rangePrime(m,n) will return all prime numbers between m & n.

### Numbers Supported
- [Palindrome](https://en.wikipedia.org/wiki/Palindromic_number)
- [Prime](https://en.wikipedia.org/wiki/Prime_number)


### Examples
* Palindrome Numbers
    * Valid:
      ```js
       const rangePalindrome = M.range('palindrome');
       rangePalindrome(1,5);      // [1,2,3,4]
       rangePalindrome(10,20);    // [11]
       rangePalindrome(0,18);     // [0,1,2,3,4,5,6,7,8,9,11]
       ```
    * Invalid
      ```js
      rangePalindrome([3, 4]);     //Typerror
      rangePalindrome(true);       //Typerror
      rangePalindrome(3.141718);   //Typerror
     ```

* Prime Numbers
    * Valid:
      ```js
       const rangePrime = M.range('prime');
       rangePrime(25);      // [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
       rangePrime(7);       // [ 2, 3, 5, 7 ]
       rangePrime(14);      // [ 2, 3, 5, 7, 11, 13]
       ```
    * Invalid
      ```js
      rangePrime("31");     //Typerror
      rangePrime(true);     //Typerror
      rangePrime(-20);     //Typerror
     ```

### Info:
Implemented using JavaScript's ability to export functions.
Similar methods can be rangeed here: 
[Find-nth-Number](https://github.com/pbiswas101/Mathball/tree/master/docs/Find-nth-Number)
[Number-Checker](https://github.com/pbiswas101/Mathball/tree/master/docs/Number-Checker)

------
