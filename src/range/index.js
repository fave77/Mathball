/* Function: range() */

const validate = require('../validation/string');

module.exports = arg => {
    validate(arg,'range');
    const number = require(`../${arg}`);
    if ('range' in number) return number.range;
		else {
			throw new TypeError(
				`Error: Invalid Argument! \n
			 Module '${JSON.stringify(arg)}' does not support 'range()'!`
			);
		}
};
