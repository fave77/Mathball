/* count of numbers having gcd 1 till num
 * Function: phi()
 */

const validate = require('../validation/non-negative-integer');

function phi(num) {
	let result = num;

	for (let i = 3; i <= Math.sqrt(num); i = i + 1) {
        if (num % i == 0) {
            while (num % i == 0) {
                num = num / i;
            }
            result = result - result/i;
        }
	}

	if (num > 1) {
        result = result - result / num;
	}

	return result;
}

module.exports = num => {
	validate(num, 'phi');
	return phi(num);
};
