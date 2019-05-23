/* Function: gcd() */

const validate = require('../validation/number-array');


 function gcd(a, b) 
{ 
     if (a < b) 
        return gcd(b, a); 
  
     if (Math.abs(b) < 0.001) 
        return a; 
  
    else
        return Math.round(gcd(b, (a - Math.floor(a / b) * b) + 0.00001) * 1000) / 1000;
 } 
 
 
module.exports = arr => {
   
     validate(arr,'gcd');

 	return arr.reduce((prev, next) =>  gcd(prev, next), arr[0]);
};
