/*
 * Positive Integer Validation
 */

module.exports = (arg, func) => {
	if(typeof arg != 'number' || arg + 1 == arg || arg != arg || arg < 1 || !Number.isInteger(arg))
		throw new TypeError(`Invalid argument received -  ${JSON.stringify(arg)}\n'${func}()' only accept a positive integer!\n`);
}
