/*
 * Array Validation
 */

module.exports = (arg, func) => {
	let isValid = false;

	typeof arg === 'string'
		? (isValid = true)
		: arg.constructor === Array
		? (isValid = true)
		: (isValid = false);

	if (!isValid) throw new TypeError(`Invalid argument received -  ${JSON.stringify(arg)}\n'${func}()' only accept an Array or a String!\n`);
};
