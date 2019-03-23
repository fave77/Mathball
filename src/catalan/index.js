/* Nth Catalan Number
 * Function: catalan()
 */

const validate = require('../validation/non-negative-integer');

function binomialCoeff(n, k) {
	let res = 1;
	for (let i = 0; i < k; i++) {
		res = res * (n - i);
		res = res / (i + 1);
	}
	return res;
}

exports.find = num => {
	validate(num, 'catalan');
	let c = binomialCoeff(2 * num, num);
	return c / (num + 1);
};
