/* Factorial of a Number
 * Function: factorial()
 */

function handleError(type) {
	if (typeof type == 'undefined') {
		try {
			throw new Error("'factorial()' didn't receive any valid argument!");
		} catch (err) {
			console.error('\x1b[36m%s\x1b[0m', err);
			process.exit(0);
		}
	} else {
		try {
			throw new TypeError("Pass a positive integer to 'factorial()'!");
		} catch (err) {
			console.log(process.env);
			console.error(
				'\x1b[36m%s\x1b[0m',
				err,
				`\x1b[5m\nDo not include a '${type}'\x1b[0m`
			);
			process.exit(0);
		}
	}
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
	if (typeof num == 'undefined') handleError();
	else if (typeof num == 'number' && parseInt(num, 10) == num && num >= 0) {
		return factorial(num);
	} else if (num != num) handleError('NaN');
	else if (num + 1 == num) handleError('Infinity');
	else if (typeof num == 'number' && parseInt(num, 10) != num)
		handleError('floating point');
	else if (typeof num == 'number' && num < 0) handleError('negative number');
	else handleError(typeof num);
};
