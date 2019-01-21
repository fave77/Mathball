/* Factorial of a Number
 * Function: factorial()
 */

function validate(arg) {
	if(typeof arg != 'number' || arg + 1 == arg || arg != arg || arg < 0 || !Number.isInteger(arg))
		throw new TypeError(`Invalid argument recieved: ${JSON.stringify(arg)}\n'factorial()' only accept a positive integer!\n`);
}

/**
 *
 * @param {number} number
 * @returns {number}
 */
function factorial(number) {
	let i = 1,
		result = 1;
	for (; i <= number; i++) {
		result = result * i;
	}
	return result;
}

exports.factorial = num => {
 validate(num);
 return factorial(num);
};
