/*
 * Pipe Validation
 */

module.exports = (arg, func) => {
	if(arg === undefined)
		throw new TypeError(`Invalid argument received: ${JSON.stringify(arg)}\n'${func}()' only accept an array of functions!\n`);
}
