/* Function: gcd() */

const validate = require('../validation/integer-array');
function findGCD(a, b) 
{ 
    if (b == 0) {
       
       return a; 
		}

    return findGCD(b, a % b);  
} 
function gcd(arr) 
{ 
    var result = arr[0]; 
    for (var i = 1; i < arr.length; i++) {
        result = findGCD(arr[i], result); 
		}
    return result; 
}
module.exports = arr => {
	validate(arr, 'gcd');
	return gcd(arr);
};
