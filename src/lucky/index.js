/* Lucky Number
 * Function: isLucky()
 */

function validate(arg) {
	if (typeof arg != "number" || arg < 1 || !Number.isInteger(arg)) {
		throw new TypeError(
			`Invalid argument recieved: ${JSON.stringify(
				arg
			)}\n'isLucky()' only accept a positive integer!\n`
		);
	}
}

exports.isLucky = num => {
	validate(num);
	var counter = 2;
	while (1) {
		if (counter > num) {
			return true;
		} else if (num % counter === 0) {
			return false;
		}
		num = num - Math.floor(num / counter);
		counter++;
	}
};
