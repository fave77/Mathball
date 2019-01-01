/* Fibonacci Number
 * Function: fibonacci()
 */

function fib(num) {
	return num <= 1 ? num : fib(num - 1) + fib(num - 2);
}

function handleError(type) {
	if(typeof type == 'undefined') {
		try {
			throw new Error('\'fibonacci()\' didn\'t receive any valid argument!');
		} catch(err) {
			console.error('\x1b[36m%s\x1b[0m', err);
			process.exit(0);
		}
	} else {
		try {
			throw new TypeError('Pass a positive integer to \'fibonacci()\'!');
		} catch(err) {
			console.error('\x1b[36m%s\x1b[0m', err, `\x1b[5m\nDo not include a '${type}'\x1b[0m`);
			process.exit(0);
		}
	}
}

exports.fibonacci = num => {
	if(typeof num == 'undefined') handleError();
	else if(typeof num == 'number' && parseInt(num, 10) == num && num > 0) return fib(num);
	else if(num != num) handleError('NaN');
	else if(num + 1 == num) handleError('Infinity');
	else if(typeof num == 'number' && parseInt(num, 10) != num) handleError('floating point');
	else if(typeof num == 'number' && num < 0 ) handleError('negative number');
	else if(num === 0) handleError('zero');
	else handleError(typeof num);
};
