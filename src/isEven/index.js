/* Function: isEven() */

const validate = require('../validation/integer');

module.exports = num => {
	validate(num, 'isEven');
	return num & 1 ? false : true;
};
