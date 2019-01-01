/* Function: length() */

function handleError(type) {
	if(typeof type == 'undefined') {
		try {
			throw new Error('\'length()\' didn\'t receive any valid argument!');
		} catch(err) {
			console.error('\x1b[36m%s\x1b[0m', err);
			process.exit(0);
		}
	} else {
		try {
			throw new TypeError('Pass any of the type - <number, string, array, object> to \'length()\'!');
		} catch(err) {
			console.error('\x1b[36m%s\x1b[0m', err, `\x1b[5m\nDo not pass a '${type}'\x1b[0m`);
			process.exit(0);
		}
	}
}

module.exports = item => {
	switch(typeof item) {
		case 'number':
			if(item != item) handleError('NaN');
			else if(item + 1 == item) handleError('Infinity');
			else if(parseInt(item, 10) != item) {
				let arr = item.toString().split('');
				arr.splice(arr.indexOf('.'), 1);
				return arr.length;
			}
			return item.toString().length;
		case 'string':
		case 'object':
			if(item == null) handleError('null');
			return item.hasOwnProperty('length') ? item.length : Object.keys(item).length;
		case 'undefined':
			handleError();
		default:
			handleError(typeof item);
	}
};
