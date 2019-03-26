/* Function: isOdd() */

const validate = require('../validation/integer');

exports.check = num => {
	validate(num, 'isOdd');
	return num & 1 ? true : false;
};
