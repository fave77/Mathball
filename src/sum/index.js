/* Function: sum() */

const validate = require('../validation/number-array');

module.exports = arr => {
	validate(arr, 'sum');
	return arr.reduce((prev, next) => prev + next, 0);
};
