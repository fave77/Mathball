/*
 * Pipe Validation
 */

module.exports = (arg, func) => {
	let flag = 0;
	if(arg.length != 0)
		arg.forEach(item => {
			if(typeof item != 'function') flag = 1;
		});
	if(!arg.length || arg.constructor != Array || flag)
		throw new TypeError(`Invalid argument received: ${JSON.stringify(arg)}\n'${func}()' only accept an array of functions!\n`);
}
