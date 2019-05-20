/* Function: fgcd() */

const validate = require('../validation/float');


 function fgcd(a, b) 
{ 
     if (a < b) {
        return fgcd(b, a); 
		 }
  
     if (Math.abs(b) < 0.001) {
        return a; 
		 }
  
    else{
        return (fgcd(b, a - Math.floor(a / b) * b));  
		}
} 
 
module.exports = (a, b) => {
	validate(a, 'fgcd');
	validate(b, 'fgcd');
	
  	return Math.round((fgcd(a,b) + 0.00001) * 1000) / 1000;
};
