/*Triangular Number
*Function: M.triangular()
*/

const validate = require('../validation/positive-integer');

const triangular = (n) => {
	let sum = 0;
	for(let i = 1; sum <= n; i++){
		sum += i;
		if(sum === n){
			return true;}
			
	}
	return false;
};

exports.triangular = (n) => {
	validate(n, 'triangular');
	return triangular(n);
};
