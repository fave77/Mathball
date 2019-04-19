# Euler's Totient </br>  
The ``` M.phi() ``` function for an input n returns count of numbers in {1, 2, 3, …, n} that are relatively prime to n, i.e., the numbers whose GCD (Greatest Common Divisor) with n is 1   

### Syntax  
> M.phi(num)  

### Arguments  
> Number  
	
### Return  
> Number  
	
### Examples  
- Valid:  
	```js
	M.phi(9);                                // 6
	M.phi(0);                                // 0
	M.phi(10)                                // 4 
	```  
- Invalid:  
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'phi()' only accept a non-negative-integer!
	 */
	M.phi("31")
	M.phi(true)
  M.phi(31.101996)
  M.phi(-20)
  M.phi(0)
	```

### Info:
Implemented using Euler’s product formula.

------




