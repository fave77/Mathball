/* Prime Number
 * Function: isPrime()
 */

function validate(arg) {
	if(typeof arg != 'number' || arg + 1 == arg || arg != arg || arg < 1 || !Number.isInteger(arg))
		throw new TypeError(`Invalid argument received: ${JSON.stringify(arg)}\n'isPrime()' only accept a positive integer!\n`);
}

exports.isPrime = num => {
	validate(num);
	for(let i = 2; i <= Math.sqrt(num); i++)
		if(num % i == 0) return false;
	return num == 1 ? false : true;
};
