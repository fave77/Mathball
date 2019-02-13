/* Deficient Number
 * Function: isDeficient()
 */

const validate = require('../validation/positive-integer');

// Get the sume of all the divisor of the number
function sumDivisor(num) {
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

// Comparing Sum of divisors and the number * 2 to check if number is deficient or not. 
 exports.isDeficient = num => {
	validate(num, "isDeficient()");
	return sumDivisor(num) < 2 * num;
};
 
