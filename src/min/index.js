/* Function: min() */

function validate(arg) {
	let flag = 0;
	if(arg && arg.constructor == Array)
		arg.forEach(item => {
			if(typeof item != 'number' || item + 1 == item || item != item) flag = 1;
		});
	if(!arg || arg.constructor != Array || flag)
		throw new TypeError(`Invalid argument recieved: ${JSON.stringify(arg)}\n'min()' only accept an array of real numbers!\n`);
}

module.exports = arr => {
	validate(arr);
	return arr.reduce((prev, next) => Math.min(prev, next), Number.MAX_VALUE);
};
