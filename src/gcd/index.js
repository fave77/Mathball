/* Function: gcd() */

const validate = require('../validation/integer-array');
function findGCD(a, b) 
{ 
    if (a < b) 
        return findGCD(b, a); 
  
    if (Math.abs(b) < 0.001) 
        return a; 
  
    else
        return (findGCD(b, a - (a / b) * b)); 
} 
function gcd(arr) 
{ 
    var result = arr[0]; 
    for (var i = 1; i < arr.length; i++) 
        result = findGCD(arr[i], result); 
  
    return result; 
}
module.exports = arr => {
	validate(arr, 'gcd');
	return gcd(arr);
};
