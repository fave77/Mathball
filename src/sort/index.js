/* Function: sort() */

function validate(arg, order) {
	let flag = 0;
	if(arg && arg.constructor == Array)
		arg.forEach(item => {
			if(typeof item != 'number' || item + 1 == item || item != item) flag = 1;
		});
	if(!arg || arg.constructor != Array || flag || typeof order != 'boolean')
		throw new TypeError(`Invalid argument received: ${JSON.stringify(arg)}, ${order}\n'sort()' only accept an array of real numbers and boolean <optional> as the arguments!\n`);
}

module.exports = (arr, ascend = true) => {
	validate(arr, ascend);
	return arr.sort((prev, next) => ascend ? prev - next : next - prev);
};
