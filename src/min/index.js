/* Function: min() */

const validate = require('../validation/number-array');

module.exports = arr => {
	validate(arr, 'min');
	return Math.min(...arr);
};
