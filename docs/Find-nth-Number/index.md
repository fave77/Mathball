# find
The `M.find()` function returns the nth number of the type specified , like if the argument passed to `M.find()` is factorial, 
then `M.find('factorial')(5)` will return 120.

### Syntax
> M.find('number-type')

### Arguments
> <String>

### Return
> <Function> e.g. num
num(n) will return the nth-number!

### Numbers Supported
- [bell](https://en.wikipedia.org/wiki/Bell_number)
- [Catalan](https://en.wikipedia.org/wiki/Catalan_number)
- [Factorial](https://en.wikipedia.org/wiki/Factorial)
- [Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number)
- [hexagonal](https://en.wikipedia.org/wiki/Hexagonal_number)
- [magic](https://en.wikipedia.org/wiki/Magic_number_(programming))
- [padovan](https://en.wikipedia.org/wiki/Padovan_sequence)
- [prime-factor](https://en.wiktionary.org/wiki/prime_factor)
- [smart](https://en.wikipedia.org/wiki/Smart_number)
- [triangular](https://en.wikipedia.org/wiki/Triangular_number)
- [ugly](https://www.geeksforgeeks.org/ugly-numbers/)

### Examples
* Bell Numbers
    * Valid:
      ```js
       const bell = M.find('bell');
       bell(2);     // 2 
       bell(4);    // 15
       bell(5);   // 52
       ```
    * Invalid
      ```js
      bell([3, 4]);     //Typerror
      bell(true);      //Typerror
      bell(3.141718); //Typerror
     ```

* Catalan Numbers
    * Valid:
      ```js
       const catalan = M.find('catalan');
       catalan(2);     // 2 
       catalan(3);    // 5
       catalan(5);   // 42
       ```
    * Invalid
      ```js
      catalan("31");     //Typerror
      catalan(true);     //Typerror
      catalan(-20);     //Typerror
     ```

* Factorial
    * Valid:
      ```js
       const factorial = M.find('factorial');
        factorial(2);     // 2
        factorial(4);    // 24
        factorial(5);   // 120
       ```
    * Invalid
      ```js
      factorial([3, 4]);     //Typerror
      factorial(true);      //Typerror
      factorial(3.141718); //Typerror
     ```

* Fibonacci Number
    * Valid:
      ```js
       const fibonacci = M.find('fibonacci');
       fibonacci(0);     // 0
       fibonacci(7);    // 13
       fibonacci(9);   // 34
       ```
    * Invalid
      ```js
      fibonacci([3, 4]);     //Typerror
      fibonacci(true);      //Typerror
      fibonacci(3.141718); //Typerror
     ```

* Hexagonal Number
    * Valid:
      ```js
       const hexagonal = M.find('hexagonal');
       hexagonal(6);     // 66
       hexagonal(15);    // 435
       hexagonal(10);   // 190
       ```
    * Invalid
      ```js
      hexagonal(-20);     //Typerror
      hexagonal(true);      //Typerror
      hexagonal(3.141718); //Typerror
     ```

* Magic Number
    * Valid:
      ```js
       const magic = M.find('magic');
       magic(2);     // 25
       magic(4);    // 125
       magic(5);   // 130
       ```
    * Invalid
      ```js
      magic([3, 4]);     //Typerror
      magic(true);      //Typerror
      magic(3.141718); //Typerror
     ```
* Padovan Number
    * Valid:
      ```js
       const padovan = M.find('padovan');
       padovan(6);     // 4
       padovan(15);    // 49
       padovan(12);   // 21
       ```
    * Invalid
      ```js
      padovan([3, 4]);     //Typerror
      padovan(true);      //Typerror
      padovan(3.141718); //Typerror
     ```
* prime-factors
    * Valid:
      ```js
       const primeFactors = M.find('prime-factor');
       primeFactors(2);     // [2] 
       primeFactors(101);    // [101]
       primeFactors(100);   //  [2, 2, 5, 5]
       ```
    * Invalid
      ```js
      primeFactors([3, 4]);     //Typerror
      primeFactors(true);      //Typerror
      primeFactors(3.141718); //Typerror
     ```
* Smart Number
    * Valid:
      ```js
       const smart = M.find('smart');
       smart(1);        // 30
       smart(1000);    // 2664
       smart(50);      // 273
       ```
    * Invalid
      ```js
      smart([3, 4]);     //Typerror
      smart(true);      //Typerror
      smart(3.141718); //Typerror
     ```
* triangular
    * Valid:
      ```js
       const triangular = M.find('triangular');
       triangular(2);     // 3
       triangular(4);    // 10
       triangular(5);   // 15
       ```
    * Invalid
      ```js
      triangular([3, 4]);    //Typerror
      triangular(true);      //Typerror
      triangular(3.141718);  //Typerror
     ```
* Ugly Number 
    * Valid:
      ```js
       const ugly = M.find('ugly');
       ugly(2);     // 2 
       ugly(4);     // 15
       ugly(5);     // 52
       ```
    * Invalid
      ```js
      ugly([3, 4]);     //Typerror
      ugly(true);      //Typerror
      ugly(3.141718); //Typerror
     ```

### Info:
Implemented using JavaScript's ability to export functions.
Similar methods can be checked here: 
[Number Checker](https://github.com/pbiswas101/Mathball/tree/master/docs/Number-Checker)
[Range of Number](https://github.com/pbiswas101/Mathball/tree/master/docs/Range-of-Number)

------
