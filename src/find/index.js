/* Function : find() */

const validate = require('../validation/string');

module.exports = arg => {
	validate(arg, 'find');
	const number = require(`../${arg}`);
	if('find' in number) {
		return number.find;
	} else {
		throw new TypeError(
			`Error: Invalid Argument! \n 
				Module '${JSON.stringify(arg)}' does not support 'find()'!`
		);
	}
};
