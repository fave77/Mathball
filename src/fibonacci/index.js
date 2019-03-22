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

exports.find = num => {
	validate(num, 'fibonacci');
	return fib(num);
};

/* Range Fibonacci Number
 * Function: rangeFibonacci()
 */

const rangeFib = num => {
	let n1 = 0, n2 = 1, nextT = null, rangeArr = [];

	do {
		rangeArr.push(n1);
		nextT = n1 + n2;
		n1 = n2;
		n2 = nextT;
	} while (n1 <= num);
	return rangeArr;
};

exports.range = num => {
	validate(num, 'rangeFibonacci');
	return rangeFib(num);
};
