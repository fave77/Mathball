/* Automorphic Number
 * Function: isAutomorphic()
 */

function handleError(type) {
	if(typeof type == 'undefined') {
		try {
			throw new Error('\'isAutomorphic()\' didn\'t receive any valid argument!');
		} catch(err) {
			console.error('\x1b[36m%s\x1b[0m', err);
			process.exit(0);
		}
	} else {
		try {
			throw new TypeError('Pass a positive integer to \'isAutomorphic()\'!');
		} catch(err) {
			console.error('\x1b[36m%s\x1b[0m', err, `\x1b[5m\nDo not include a '${type}'\x1b[0m`);
			process.exit(0);
		}
	}
}

exports.isAutomorphic = num => {
	if(typeof num == 'undefined') handleError();
	else if(typeof num == 'number' && parseInt(num, 10) == num && num > 0) {
		let str = Math.pow(num, 2).toString();
		return num == str.slice(str.indexOf(num.toString()));
	} else if(num != num) handleError('NaN');
	else if(num + 1 == num) handleError('Infinity');
	else if(typeof num == 'number' && parseInt(num, 10) != num) handleError('floating point');
	else if(typeof num == 'number' && num < 0 ) handleError('negative number');
	else if(num === 0) handleError('zero');
	else handleError(typeof num);
};
