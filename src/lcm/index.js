/* Function: lcm() */

function gcd(a, b) {
  return (a == 0) ? b : gcd(b % a, a);
}

function handleError(type, arg) {
	if(typeof type == 'undefined') {
		try {
			throw new Error('\'lcm()\' didn\'t receive any valid argument!');
		} catch(err) {
			console.error('\x1b[36m%s\x1b[0m', err);
			process.exit(0);
		}
	} else {
		try {
			throw new TypeError('Pass an array of numbers to \'lcm([...])\'!');
		} catch(err) {
			let msg = arg ? `\nDo not include a '${type}' in the array` : `\nDo not pass a '${type}'`;
			console.error('\x1b[36m%s\x1b[0m', err, `\x1b[5m\n${msg}\x1b[0m`);
			process.exit(0);
		}
	}
}

module.exports = arr => {
	if(typeof arr == 'undefined') handleError();
	else if(typeof arr == 'object' && arr !== null && arr.hasOwnProperty('length'))
		return arr.reduce((prev, next) => {
			if(typeof next == 'number' && parseInt(next, 10) == next) {
				let res = (prev * next) / gcd(prev, next);
				return isNaN(res) ? 0 : res;
			}
			else if(next != next) handleError('NaN', true);
			else if(next + 1 == next) handleError('Infinity', true);
			else if(typeof next == 'number' && parseInt(next, 10) != next) handleError('floating point', true);
			else handleError(typeof next, true);
		}, arr[0]);
	else handleError(typeof arr, false);
};
