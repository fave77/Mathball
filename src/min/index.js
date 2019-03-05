/* Function: min() */

const validate = require('../validation/number-array');

module.exports = arr => {
	validate(arr, 'min');
	return arr.reduce((prev, next) => Math.min(prev, next), Number.MAX_VALUE);
};
