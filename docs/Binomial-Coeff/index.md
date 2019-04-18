# Binomial Coefficient 
The ``` M.nCr(n,r) ``` function return the coefficiant of x<sup>r</sup> in the expansion of (1+x)<sup>n</sup> .

### Syntax  
> M.nCr(value of n,value of r)  

### Arguments  
> Number  
    
### Return  
> Number
    
### Examples  
- Valid:  
    ```js
    M.nCr(4,2);          // 6  
    M.nCr(5,2);         // 10  
    M.nCr(3,1);         // 3
    ```  
- Invalid:  
    ```js
    /*
     * TypeError: Invalid argument received: <argument>
     * 'nCr(n,k)' only accept positive real numbers where n >= r must hold true.
     */
    M.nCr(3,5);
    M.nCr(-2,5);
    M.nCr(2.02,3);
    ```

### Info:
Implemented using JavaScript's `if()` condition and `for()` loop.

------





