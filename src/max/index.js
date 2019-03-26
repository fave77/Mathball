/* Function: max() */

const validate = require('../validation/number-array');

module.exports = arr => {
	validate(arr, 'max');
	return Math.max(...arr);
};
