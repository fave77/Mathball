/* Function: isEven() */

function handleError(type) {
	if(typeof type == 'undefined') {
		try {
			throw new Error('\'isEven()\' didn\'t receive any valid argument!');
		} catch(err) {
			console.error('\x1b[36m%s\x1b[0m', err);
			process.exit(0);
		}
	} else {
		try {
			throw new TypeError('Pass an integer to \'isEven()\'!');
		} catch(err) {
			console.error('\x1b[36m%s\x1b[0m', err, `\x1b[5m\nDo not include a '${type}'\x1b[0m`);
			process.exit(0);
		}
	}
}

module.exports = num => {
	if(typeof num == 'undefined') handleError();
	else if(num != num) handleError('NaN');
	else if(num + 1 == num) handleError('Infinity');
	else if(typeof num == 'number' && parseInt(num, 10) != num) handleError('floating point');
	else if(typeof num == 'number') return num & 1 ? false : true;
	else handleError(typeof num);
};
