/* Function: max() */

const validate = require('../validation/number-array');

module.exports = arr => {
	validate(arr, 'max');
	return arr.reduce((prev, next) => Math.max(prev, next), Number.MIN_VALUE);
};
