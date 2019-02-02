/* Armstrong Number
 * Function: isArmstrong()
 */

function validate(arg) {
	if(typeof arg != 'number' || arg + 1 == arg || arg != arg || arg < 1 || !Number.isInteger(arg))
		throw new TypeError(`Invalid argument received: ${JSON.stringify(arg)}\n'isArmstrong()' only accept a positive integer!\n`);
}

exports.isArmstrong = num => {
	validate(num);
	let str = num.toString();
	return num == str.split('').reduce((prev, next) => prev + Math.pow(parseInt(next, 10), str.length), 0);
};
