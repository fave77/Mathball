/* Magic Number
 * Function: magic()
 */

function validate(arg) {
	if(typeof arg != 'number' || arg + 1 == arg || arg != arg || arg < 1 || !Number.isInteger(arg))
		throw new TypeError(`Invalid argument received: ${JSON.stringify(arg)}\n'magic()' only accept a positive integer!\n`);
}

exports.magic = num => {
	validate(num);
	let pow = 1, res = 0;
	while (num) {
		pow *= 5;
		res += num & 1 ? pow : 0;
		num >>= 1;
	}
	return res;
};
