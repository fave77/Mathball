/*
 * Non-negative Integer Validation
 */

module.exports = (arg, func) =>  {
	if (typeof arg != "number" || arg < 0 || !Number.isInteger(arg)) {
		throw new TypeError(
			`Invalid argument received: ${JSON.stringify(arg)}\n'${func}()' only accepts a non-negative integer!\n`
		);
	}
}
