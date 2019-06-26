/* Function: gcd() */

const validate = require('../validation/number-array');

function gcd(a, b) {
	return (a == 0) ? b : gcd(b % a, a);
}

module.exports = arr => {
	validate(arr, 'gcd');
	var posArr = arr.map((value) => (value < 0) ? value * -1 : value)
	var largestDecimal = posArr.reduce((prev, next) => Math.max(getDecimalCount(prev), getDecimalCount(next)))
	return posArr.reduce((prev, next) => gcd(prev * Math.pow(10, largestDecimal), next * Math.pow(10, largestDecimal)) / Math.pow(10, largestDecimal), posArr[0]);
};

const getDecimalCount = value => {
	var decimals = 0
	if (value % 1 == 0) {
		return decimals
	}
	decimals++
	for (var i = 1; i < 11; i++) {
		if ((value * Math.pow(10, i)) % 1 != 0) {
			decimals++
		}
		else { break }
	}
	return decimals
}