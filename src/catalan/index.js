/* Nth Catalan Number
 * Function: catalan()
 */

const validate = require('../validation/non-negative-integer'),
		nCr = require('../binomial-coeff/index');

exports.find = num => {
	validate(num, 'catalan');
	let c = nCr(2 * num, num);
	return c / (num + 1);
};
