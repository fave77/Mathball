/* Kaprekar Number
 * Function: isKaprekar()
 */

const validate = require('../validation/positive-integer');

exports.check = num => {
	validate(num, 'isKaprekar');
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
