# check
The `M.check()` function returns the decision whether the number is a type of number given as argument to `M.check() function.

### Syntax
> M.check('number-type')

### Arguments
> <String>

### Return
> <Function> e.g. armstrong
armstrong(n) will return whether n is armstrong or not!

### Numbers Supported
- [armstrong](https://en.wikipedia.org/wiki/Narcissistic_number)
- [automorphic](https://en.wikipedia.org/wiki/Automorphic_number)
- [Carmichael](https://en.wikipedia.org/wiki/Carmichael_number)
- [deficient](https://en.wikipedia.org/wiki/Deficient_number)
- [Even](https://simple.wikipedia.org/wiki/Even_number)
- [fibbinary](https://en.wikipedia.org/wiki/Fibonacci_coding)
- [Harshad](https://en.wikipedia.org/wiki/Harshad_number)
- [Hoax](https://www.geeksforgeeks.org/hoax-number/)
- [Kaprekar](https://en.wikipedia.org/wiki/Kaprekar_number)
- [Lucky](https://en.wikipedia.org/wiki/Lucky_number)
- [Neon](https://www.geeksforgeeks.org/neon-number/)
- [odd](https://simple.wikipedia.org/wiki/Odd_number)
- [palindrome](https://en.wikipedia.org/wiki/Palindromic_number)
- [perfect](https://en.wikipedia.org/wiki/Perfect_number)
- [prime](https://en.wikipedia.org/wiki/Prime_number)
- [smith](https://en.wikipedia.org/wiki/Smith_number)
- [stormer](https://en.wikipedia.org/wiki/St%C3%B8rmer_number)


### Examples
* Armstrong Numbers
    * Valid:
      ```js
       const isArmstrong = M.check('armstrong');
       isArmstrong(153);    // true
       isArmstrong(4);      // false
       isArmstrong(522);    // false
       ```
    * Invalid:
      ```js
      isArmstrong([3, 4]);    //Typerror
      isArmstrong(true);      //Typerror
      isArmstrong(3.141718);  //Typerror
     ```

* Automorphic Numbers
    * Valid:
      ```js
       const isAutomorphic = M.check('automorphic');
       isAutomorphic(25);    // true
       isAutomorphic(7);     // false
       isAutomorphic(14);    // false
       ```
    * Invalid:
      ```js
      isAutomorphic("31");     //Typerror
      isAutomorphic(true);     //Typerror
      isAutomorphic(-20);     //Typerror
     ```

* Carmichael Number
    * Valid:
      ```js      
       const isCarmichael = M.heck('carmichael');
        isCarmichael(561);    // true
        isCarmichael(8);      // false
        isCarmichael(1105);   // true
       ```
    * Invalid:
      ```js
      isCarmichael([3, 4]);     //Typerror
      isCarmichael(true);      //Typerror
      isCarmichael(3.141718); //Typerror
     ```

* deficient Number
    * Valid:
      ```js
       const deficient = M.check('deficient');
       deficient(10);   //true
       deficient(1);   //true
       deficient(6);   //false     
        ```
    * Invalid:
      ```js
      deficient([3, 4]);     //Typerror
      deficient(true);      //Typerror
      deficient(3.141718); //Typerror
     ```

*   Even Number
    * Valid:
      ```js
       const isEven = M.check('even');
       isEven(6);    //true 
       isEven(15);   //false 
       isEven(10);   //true
       ```
    * Invalid:
      ```js
      isEven("20");     //Typerror
      isEven(true);     //Typerror
      isEven([3,45]);   //Typerror
     ```

* Fibbinary Number
    * Valid:
      ```js
       const fibbinary = M.check('fibbinary');
       fibbinary(10);     // true
       fibbinary(4);      // false
       fibbinary(63);     // false
       ```
    * Invalid:
      ```js
      fibbinary([3, 4]);     //Typerror
      fibbinary(true);       //Typerror
      fibbinary(1.141718);   //Typerror
     ``` 
* Harshad Number
    * Valid:
      ```js
       const isHarshad = M.check('harshad');
       isHarshad(18);     // true
       isHarshad(23);     // false
       isHarshad(15);     // false
       ``` 
    * Invalid: 
      ```js
      isHarshad([3, 4]);     //Typerror
      isHarshad(true);       //Typerror
      isHarshad(3.141718);   //Typerror
     ```
* Hoax Number
    * Valid:
      ```js
       const hoax = M.check('hoax');
       hoax(84);     // true
       hoax(15);     // false
       hoax(3);      // false 
       ```
    * Invalid:
      ```js
      hoax([3, 4]);     //Typerror
      hoax(true);      //Typerror
      hoax(3.141718); //Typerror
     ```
* Kaprekar Number
    * Valid:
      ```js
       const isKaprekar = M.check('kaprekar');
       isKaprekar(9);       // true
       isKaprekar(13);      // false
       isKaprekar(44);      // false
       ```
    * Invalid:
      ```js
      isKaprekar([3, 4]);    //Typerror
      isKaprekar(true);      //Typerror
      isKaprekar(3.141718);  //Typerror
     ```
* Lucky Number
    * Valid:
      ```js
       const isLucky = M.check('lucky');
       isLucky(13);    // true
       isLucky(2);    // false
       isLucky(5);    // false
       ```
    * Invalid:
      ```js
      isLucky([3, 4]);    //Typerror
      isLucky(true);      //Typerror
      isLucky(3.141718);  //Typerror
     ```
* Neon Number 
    * Valid:
      ```js
       const neon = M.check('neon');
       neon(9);      // true
       neon(12);     // false
       neon(5);      // false
       ```
    * Invalid:
      ```js
      neon([3, 4]);     //Typerror
      neon(true);      //Typerror
      neon(3.141718); //Typerror
     ```

* Odd Number 
    * Valid:
      ```js
       const isOdd = M.check('odd');
       isOdd(9);      // true
       isOdd(12);     // false
       isOdd(52);      // false
       ```
    * Invalid:
      ```js
      isOdd([3, 4]);     //Typerror
      isOdd(true);      //Typerror
      isOdd(3.141718); //Typerror
     ```

* Palindrome Number 
    * Valid:
      ```js
       const ispalindrome = M.check('palindrome');
       ispalindrome(191);      // true
       ispalindrome(122);     // false
       ispalindrome(522);      // false
       ```
    * Invalid:
      ```js
      ispalindrome([3, 4]);     //Typerror
      ispalindrome(true);      //Typerror
      ispalindrome(3.141718); //Typerror
     ```

* Perfect Number
    * Valid:
      ```js
       const perfect = M.find('perfect');
       perfect(6);    // true
       perfect(15);   // false
       perfect(4);    // false
       ```
    * Invalid:
      ```js
      perfect([3, 4]);     //Typerror
      perfect(true);       //Typerror
      perfect(3.141718);   //Typerror
     ```

* Prime Number
    * Valid:
      ```js
       const isPrime = M.find('prime');
       isPrime(2);       // true
       isPrime(7);       // true
       isPrime(50);      // false
       ```
    * Invalid:
      ```js
      isPrime([3, 4]);      //Typerror
      isPrime(true);        //Typerror
      isPrime(3.141718);    //Typerror
     ```

* Smith Number 
    * Valid:
      ```js
       const smith = M.find('smith');
       smith(666);    // true
       smith(4);      // true
       smith(13);     // false
       ```
    * Invalid:
      ```js
      smith([3, 4]);    //Typerror
      smith(true);      //Typerror
      smith(3.141718);  //Typerror
     ```

* Stormer Number
    * Valid:
      ```js
       const stormer = M.find('stormer');
       stormer(11);     // true
       stormer(1);      // true
       stormer(7);      // false
       ```
    * Invalid:
      ```js
      stormer([3, 4]);     //Typerror
      stormer(true);      //Typerror
      stormer(3.141718); //Typerror
     ```



### Info:
Implemented using JavaScript's ability to export functions.
Similar methods can be checked here: 
[Find-nth-Number](https://github.com/pbiswas101/Mathball/tree/master/docs/Find-nth-Number)
[Range of Number](https://github.com/pbiswas101/Mathball/tree/master/docs/Range-of-Number)

------
