/*
 * Number Validation
 */

module.exports = (arg, func) => {
	if(typeof arg != 'number')
		throw new TypeError(`Invalid argument received -  ${JSON.stringify(arg)}\n'${func}()' only accept a number!\n`);
}
