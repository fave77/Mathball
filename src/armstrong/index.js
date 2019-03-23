/* Armstrong Number
 * Function: isArmstrong()
 */

const validate = require('../validation/positive-integer');

exports.check = num => {
	validate(num, 'isArmstrong');
	let str = num.toString();
	return num == str.split('').reduce((prev, next) => prev + Math.pow(parseInt(next, 10), str.length), 0);
};
