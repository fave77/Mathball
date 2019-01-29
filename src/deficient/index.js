/* Deficient Number
 * Function: isDeficient()
 */

const validate = require("../validation").validatePositiveInteger;

function divisorsSum(num) {
	var sum = 0;
	for (let i = 1; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			if (Math.floor(num / i) == i) {
				sum = sum + i;
			} else {
				sum = sum + i;
				sum = sum + Math.floor(num / i);
			}
		}
	}
	return sum;
}

exports.isDeficient = num => {
	validate(num, "isDeficient()");
	return divisorsSum(num) < 2 * num;
};
