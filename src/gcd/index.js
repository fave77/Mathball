/* Function: gcd() */

const validate = require('../validation/integer-array');

function gcd(a, b) {
  return (a == 0) ? b : gcd(b % a, a);
}

module.exports = arr => {
	validate(arr, 'gcd');
	return arr.reduce((prev, next) =>  gcd(prev, next), arr[0]);
};
