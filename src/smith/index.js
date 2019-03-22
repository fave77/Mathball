/* Smith Number
 * Function: isSmith()
 */

const validate = require('../validation/positive-integer');

var primes = new Array();
const MAX = 10000;

function sieveSundaram() {
	var marked = new Array(Math.floor(MAX / 2) + 100);
	for (let i = 0; i < Math.floor(MAX / 2) + 100; i++) {
		marked[i] = false;
	}

	for (let i = 1; i <= Math.floor((Math.sqrt(MAX) - 1) / 2); i++) {
		for (
			let j = (i * (i + 1)) << 1;
			j <= Math.floor(MAX / 2);
			j = j + 2 * i + 1
		) {
			marked[j] = true;
		}
	}
	primes.push(2);
	for (let i = 1; i <= Math.floor(MAX / 2); i++) {
		if (marked[i] === false) {
			primes.push(2 * i + 1);
		}
	}
}

function smith(num) {
	var originalNo = num;
	var pDigitSum = 0;
	for (let i = 0; primes[i] <= Math.floor(num / 2); i++) {
		while (num % primes[i] === 0) {
			var p = primes[i];
			num = Math.floor(num / p);
			while (p > 0) {
				pDigitSum = pDigitSum + (p % 10);
				p = Math.floor(p / 10);
			}
		}
	}

	if (num !== 1 && num !== originalNo) {
		while (num > 0) {
			pDigitSum = pDigitSum + (num % 10);
			num = Math.floor(num / 10);
		}
	}

	var sumDigits = 0;
	while (originalNo > 0) {
		sumDigits = sumDigits + (originalNo % 10);
		originalNo = Math.floor(originalNo / 10);
	}
	return pDigitSum === sumDigits;
}

exports.check = num => {
	validate(num, 'isSmith');
	sieveSundaram();
	return smith(num);
};
