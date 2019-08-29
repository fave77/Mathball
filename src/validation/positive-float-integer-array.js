/*
 * Positive Float & Integer Array Validation
 */

module.exports = (arg, func) => {
	let flag = 0;
	let isNotFloat = 0;
	if(arg && arg.constructor == Array)
		arg.forEach(item => {
			if(!(Number(item) == item && item % 1 > 0)) isNotFloat = 1
			if(typeof item != 'number' || item + 1 == item || isNotFloat || item != item)
				if(!Number.isInteger(item)) flag = 1;
		});
	if(!arg || arg.constructor != Array || flag)
		throw new TypeError(`Invalid argument received: ${JSON.stringify(arg)}\n'${func}()' only accept an array of positive floats or integers!\n`);
}
