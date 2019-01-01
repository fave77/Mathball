/* Armstrong Number
 * Function: isArmstrong()
 */

function handleError(type) {
	if(typeof type == 'undefined') {
		try {
			throw new Error('\'isArmstrong()\' didn\'t receive any valid argument!');
		} catch(err) {
			console.error('\x1b[36m%s\x1b[0m', err);
			process.exit(0);
		}
	} else {
		try {
			throw new TypeError('Pass a positive integer to \'isArmstrong()\'!');
		} catch(err) {
			console.error('\x1b[36m%s\x1b[0m', err, `\x1b[5m\nDo not include a '${type}'\x1b[0m`);
			process.exit(0);
		}
	}
}

exports.isArmstrong = num => {
	if(typeof num == 'undefined') handleError();
	else if(typeof num == 'number' && parseInt(num, 10) == num && num > 0) {
		let str = num.toString();
		return num == str.split('').reduce((prev, next) => prev + Math.pow(parseInt(next, 10), str.length), 0);
	} else if(num != num) handleError('NaN');
	else if(num + 1 == num) handleError('Infinity');
	else if(typeof num == 'number' && parseInt(num, 10) != num) handleError('floating point');
	else if(typeof num == 'number' && num < 0 ) handleError('negative number');
	else if(num === 0) handleError('zero');
	else handleError(typeof num);
};
