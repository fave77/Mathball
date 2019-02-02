/* Fibonacci Number
 * Function: fibonacci()
 */

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

function validate(arg) {
	if(typeof arg != 'number' || arg + 1 == arg || arg != arg || arg < 1 || !Number.isInteger(arg))
		throw new TypeError(`Invalid argument received: ${JSON.stringify(arg)}\n'fibonacci()' only accept a positive integer!\n`);
}

exports.fibonacci = num => {
	validate(num);
	return fib(num);
};
