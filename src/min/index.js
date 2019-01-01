/* Function: min() */

function handleError(type, arg) {
	if(typeof type == 'undefined') {
		try {
			throw new Error('\'min()\' didn\'t receive any valid argument!');
		} catch(err) {
			console.error('\x1b[36m%s\x1b[0m', err);
			process.exit(0);
		}
	} else {
		try {
			throw new TypeError('Pass an array of numbers to \'min([...])\'!');
		} catch(err) {
			let msg = arg ? `\nDo not include a '${type}' in the array` : `\nDo not pass a '${type}'`;
			console.error('\x1b[36m%s\x1b[0m', err, `\x1b[5m\n${msg}\x1b[0m`);
			process.exit(0);
		}
	}
}

module.exports = arr => {
	if(typeof arr == 'undefined') handleError();
	else if(typeof arr == 'object' && typeof arr.length == 'number')
		return arr.reduce((prev, next) => {
			if(next != next) handleError('NaN', true);
			else if(next + 1 == next) handleError('Infinity', true);
			else if(typeof next == 'number') return Math.min(prev, next);
			else handleError(typeof next, true);
		}, Number.MAX_VALUE);
	else handleError(typeof arr, false);
};
