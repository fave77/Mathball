/* Function: lcm() */

const validate = require('../validation/integer-array');

function gcd(a, b) {
  return (a == 0) ? b : gcd(b % a, a);
}

module.exports = arr => {
	validate(arr, 'lcm');
	return arr.reduce((prev, next) => (prev * next) / gcd(prev, next), arr[0]);
};
