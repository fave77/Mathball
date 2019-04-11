# Sort </br>  
The ``` M.sort() ``` function returns the a sorted array of integers in either ascending or descending order.  

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
	M.sort([8, -7,-5,40,9],false);         // [40,9,8,-5,-7] false=descending order
        M.sort([8, -7,-5,40,9]);               // [-7,-5,8,9,40] default=ascending order  
	```  
- Invalid:  
	```js
	/*
	 * TypeError: Invalid argument received: <argument>
	 * 'sort()' only accept an array of positive real numbers!
	 */
	M.sort([true,8],true);
	M.sort([NaN, 5, Infinity],true);
	M.sort(['foo', 'bar'],false);
	```

### Info:
Implemented using JavaScript's built-in `sort` function.

------




