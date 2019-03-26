/* Function: avg() */

const validate = require('../validation/number-array');

module.exports = arr => {
	validate(arr, 'avg');
    let sum = arr.reduce((prev, next) => prev + next, 0);
    return Number((sum/arr.length).toFixed(5));
};
