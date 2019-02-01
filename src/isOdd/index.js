/* Function: isOdd() */

function validate(arg) {
	if(typeof arg != 'number' || arg + 1 == arg || arg != arg || !Number.isInteger(arg))
		throw new TypeError(`Invalid argument received: ${JSON.stringify(arg)}\n'isEven()' only accept a positive integer!\n`);
}

module.exports = num => {
	validate(num)
	return num & 1 ? true : false;
};
