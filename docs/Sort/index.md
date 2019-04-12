# Sort </br>  
<<<<<<< HEAD
The ``` M.sort() ``` function returns the a sorted array of integers in either ascending or descending order.  
=======
The ``` M.sort() ``` function returns a sorted array of integers in either ascending or descending order.  
>>>>>>> 6a448026cd7190a35191dae9911071e9a96445d1

### Syntax  
> M.sort(value1,value2)  

### Arguments  
> Array <Number>, Boolean  
	
### Return  
> Array <Number>  
	
### Examples  
- Valid:  
	```js
	M.sort([2, 30, 5, 15,],true);          // [2,5,15,30]  true=ascending order  
<<<<<<< HEAD
	M.sort([8, -7,-5,40,9],false);         // [40,9,8,-5,-7] false=descending order
        M.sort([8, -7,-5,40,9]);               // [-7,-5,8,9,40] default=ascending order  
=======
	M.sort([8, -7,-5,40,9],false);         // [40,9,8,-5,-7] false=descending order  
	M.sort([8, -7,-5,40,9]);               // [-7,-5,8,9,40] default=ascending order  
>>>>>>> 6a448026cd7190a35191dae9911071e9a96445d1
	```  
- Invalid:  
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
<<<<<<< HEAD
	 * 'sort()' only accept an array of positive real numbers!
=======
	 * 'lcm()' only accept an array of positive real numbers!
>>>>>>> 6a448026cd7190a35191dae9911071e9a96445d1
	 */
	M.sort([true,8],true);
	M.sort([NaN, 5, Infinity],true);
	M.sort(['foo', 'bar'],false);
	```

### Info:
Implemented using JavaScript's built-in `sort` function.

------




