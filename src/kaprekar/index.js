/* Kaprekar Number
 * Function: isKaprekar()
 */

function validate(arg) {
	if (typeof arg != "number" || arg < 1 || !Number.isInteger(arg))
		throw new TypeError(
			`Invalid argument recieved: ${JSON.stringify(
				arg
			)}\n'isKaprekar()' only accepts a positive integer!\n`
		);
}

exports.isKaprekar = num => {
	validate(num);
	if (num == 1) {
		return true;
	}
	var sqNum = num * num;
	var countDigits = num.toString().length;
	var rDigits = 0;
	while (rDigits < countDigits) {
		rDigits++;
		var eqParts = Math.pow(10, rDigits);
		if (eqParts == num) {
			continue;
		}
		var sum = Math.floor(sqNum / eqParts) + (sqNum % eqParts);
		if (sum == num) {
			return true;
		}
	}
	return false;
};
