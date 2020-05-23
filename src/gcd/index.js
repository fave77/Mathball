/* Function: gcd() */

const validate = require('../validation/positive-float-integer-array');

function gcd(a, b) {
  	if (a < b) {
		return gcd(b, a);
	}
	return (Math.abs(b) < 0.001) ? a : gcd(b, a - Math.floor(a / b) * b);
}

function countDecimals(value) {
	if (value === 0 || Number.isInteger(value)) {
		return 0;
	}
	else {
	return value.toString().split(".")[1].length || 0;
  }
}

module.exports = arr => {
	validate(arr, 'gcd');
	let sum = Number(arr.reduce((prev, next) => prev + next).toFixed(10));
	return Math.round((arr.reduce((prev, next) => 
				gcd(prev, next), arr[0])) * Math.pow(10, countDecimals(sum))) / Math.pow(10, countDecimals(sum));
};
};
