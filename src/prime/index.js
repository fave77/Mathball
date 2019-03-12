/* Prime Number
 * Function: isPrime()
 */

const validate = require('../validation/positive-integer');

exports.isPrime = num => {
	validate(num, 'isPrime');
  if (num === 2 || num === 3) { return true; }
  if (num < 2 || num % 2 === 0) { return false; }
  if (num < 9) { return true; }
  if (num % 3 === 0) { return false; }
  let r = Math.sqrt(num);
  let f = 5;
  while (f <= r) {
    if (num % f === 0) { return false; }
    if (num % (f + 2) === 0) { return false; }
    f = f + 6;
  }
  return true;
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
