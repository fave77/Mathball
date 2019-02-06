/* Automorphic Number
 * Function: isAutomorphic()
 */

const validate = require('../validation/positive-integer');

exports.isAutomorphic = num => {
	validate(num, 'isAutomorphic');
	let str = Math.pow(num, 2).toString();
	return num == str.slice(str.indexOf(num.toString()));
};
