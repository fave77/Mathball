/* Fibonacci Number
 * Function: fibonacci()
 */

const validate = require('../validation/positive-integer');

function fib(num) {
	if (num <= 2) {
		return 1;
	}
	let n1 = 1, n2 = 1, total;
	for (let i = 3; i <= num; i++) {
		total	= n1 + n2;
		n1 = n2;
		n2 = total;
	}
	return total;
}

exports.fibonacci = num => {
	validate(num, 'fibonacci');
	return fib(num);
};
