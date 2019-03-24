/* Function: isEven() */

const validate = require('../validation/integer');

exports.check = num => {
	validate(num, 'isEven');
	return num & 1 ? false : true;
};
