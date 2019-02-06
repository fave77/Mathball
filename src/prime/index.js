/* Prime Number
 * Function: isPrime()
 */

const validate = require('../validation/positive-integer');

exports.isPrime = num => {
	validate(num, 'isPrime');
	for(let i = 2; i <= Math.sqrt(num); i++)
		if(num % i == 0) return false;
	return num == 1 ? false : true;
};
