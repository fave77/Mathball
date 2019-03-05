/* Function: pipe() */

const validate = require('../validation/pipe');

function curry(fn, len, arg) {
	return (len === 1) ? fn[0](arg) : curry(fn.slice(1), --len, fn[0](arg));
}

module.exports = (...fn) => {
	validate(fn, 'pipe');
	return arg => curry(fn, fn.length, arg);
}
