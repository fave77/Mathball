/* Prime factors
 * Function: findPrimeFactors()
 */

const validate = require('../validation/positive-integer');

function findPrimeFactors(num) {
	const result = [];
	while (num % 2 === 0) {
		result.push(2);
		num = num / 2;
	}

	for (let i = 3; i <= Math.sqrt(num); i = i + 2) {
		while (num % i == 0) {
			result.push(i);
			num = num / i;
		}
	}

	if (num > 2) {
		result.push(num);
	}

	return result;
}

exports.find = num => {
	validate(num, 'findPrimeFactors');
	return findPrimeFactors(num);
};
