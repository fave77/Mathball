/* Automorphic Number
 * Function: isAutomorphic()
 */

function validate(arg) {
	if(typeof arg != 'number' || arg + 1 == arg || arg != arg || arg < 1 || !Number.isInteger(arg))
		throw new TypeError(`Invalid argument received: ${JSON.stringify(arg)}\n'isAutomorphic()' only accept a positive integer!\n`);
}

exports.isAutomorphic = num => {
	validate(num);
	let str = Math.pow(num, 2).toString();
	return num == str.slice(str.indexOf(num.toString()));
};
