/*Triangular Number
*Function: M.triangular()
*/

const validate = require('../validation/positive-integer');

const triangular = (n) => {
	let sum = 0;
	for(let i = 0; i < n; i++){
		sum += (n - i);
	}
	return sum;
};

exports.find = (n) => {
	validate(n, 'triangular');
	return triangular(n);
};
