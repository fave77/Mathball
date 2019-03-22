/* Magic Number
 * Function: magic()
 */

const validate = require('../validation/positive-integer');

exports.find = num => {
	validate(num, 'magic');
	let pow = 1, res = 0;
	while (num) {
		pow *= 5;
		res += num & 1 ? pow : 0;
		num >>= 1;
	}
	return res;
};
