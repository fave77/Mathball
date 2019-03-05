/*
 * Integer Array Validation
 */

module.exports = (arg, func) => {
	let flag = 0;
	if(arg && arg.constructor == Array)
		arg.forEach(item => {
			if(typeof item != 'number' || item + 1 == item || item != item || !Number.isInteger(item) || item < 1) flag = 1;
		});
	if(!arg || arg.constructor != Array || flag)
		throw new TypeError(`Invalid argument received: ${JSON.stringify(arg)}\n'${func}()' only accept an array of positive integers!\n`);
}
