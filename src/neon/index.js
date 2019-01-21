/* Neon Number
 * Function: isNeon()
 */

function validate(arg) {
	if(typeof arg != 'number' || arg + 1 == arg || arg != arg || arg < 1 || !Number.isInteger(arg))
		throw new TypeError(`Invalid argument recieved: ${JSON.stringify(arg)}\n'isNeon()' only accept a positive integer!\n`);
}

exports.isNeon = num => {
	validate(num);
	return num == Math.pow(num, 2).toString().split('')
		.reduce((prev, next) => prev + parseInt(next, 10), 0);
};
