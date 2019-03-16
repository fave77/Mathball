/* Factorial of a Number
 * Function: factorial()
 */

const validate = require('../validation/non-negative-integer');

/**
 *
 * @param {number} number
 * @returns {number}
 */
function factorial(number) {
	let i = 1,
		result = 1;
	for (; i <= number; i++) {
		result = result * i;
	}
	return result;
}

exports.find = num => {
 validate(num, 'factorial');
 return factorial(num);
};
