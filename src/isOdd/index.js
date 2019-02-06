/* Function: isOdd() */

const validate = require('../validation/integer');

module.exports = num => {
	validate(num, 'isOdd');
	return num & 1 ? true : false;
};
