/* Function: length() */

function validate(arg) {
	let types = ['number', 'object', 'string'];
	if(types.indexOf(typeof arg) == -1 || String(arg) == 'null' ||
	(typeof arg == 'number' && (arg + 1 == arg || arg != arg))) {
		throw new TypeError(`Invalid argument received: ${JSON.stringify(arg)}\n'length()' only accept either a real number, string, object or array!\n`);
	}
}

module.exports = item => {
	validate(item);
	switch(item.constructor) {
		case Number:
			if(Number.isInteger(item)) return item.toString().length;
			else {
				let arr = item.toString().split('');
				arr.splice(arr.indexOf('.'), 1);
				return arr.length;
			}
		case String:
		case Array:
			return item.length;
		case Object:
			return Object.keys(item).length;
	}
};
