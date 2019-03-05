/* Prime Number
 * Function: isPrime()
 */

const validate = require('../validation/positive-integer');

exports.isPrime = num => {
	validate(num, 'isPrime');
	for (let i = 2; i <= Math.sqrt(num); i++)
		if (num % i == 0) return false;
	return num == 1 ? false : true;
};

/* Range of Prime Numbers
 * Function: rangePrime()
 */

exports.rangePrime = (n) => {
	validate(n, 'rangePrime');
	let numbers = Array(n + 1).fill(true);
	numbers[0] = numbers[1] = false;
	let primeNumbers = [];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i]) {
			primeNumbers.push(i);
			for (let j = i; j < n; j += i) {
				numbers[j] = false;
			}
		}
	}
	return primeNumbers;
};
