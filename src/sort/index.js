/* Function: sort() */

function handleError(type, arg) {
	if(typeof type == 'undefined') {
		try {
			throw new Error('\'sort()\' didn\'t receive any valid argument!');
		} catch(err) {
			console.error('\x1b[36m%s\x1b[0m', err);
			process.exit(0);
		}
	} else {
		try {
			throw new TypeError('Pass an array of numbers & boolean to \'sort([...], <optional: boolean>)\'!');
		} catch(err) {
			let msg = arg ? `\nDo not include a '${type}' in the array` : `\nDo not pass a '${type}'`;
			console.error('\x1b[36m%s\x1b[0m', err, `\x1b[5m\n${msg}\x1b[0m`);
			process.exit(0);
		}
	}
}

module.exports = (arr, ascend = true) => {
	if(typeof arr == 'undefined') handleError();
	else if(typeof arr == 'object' && typeof arr.length == 'number' && typeof ascend == 'boolean') {
		return arr.map(item => {
			if(item != item) handleError('NaN', true);
			else if(item + 1 == item) handleError('Infinity', true);
			else if(typeof item != 'number') handleError(typeof item, true);
			else return item;
		})
		.sort((prev, next) => ascend ? prev - next : next - prev);
	} else if(typeof ascend != 'boolean') handleError(typeof ascend, false);
	else handleError(typeof arr, false);
};
