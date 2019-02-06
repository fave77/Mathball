/* Neon Number
 * Function: isNeon()
 */

const validate = require('../validation/positive-integer');

exports.isNeon = num => {
	validate(num, 'isNeon');
	return num == Math.pow(num, 2).toString().split('')
		.reduce((prev, next) => prev + parseInt(next, 10), 0);
};
