/* Types of Numbers */

const armstrong = require('./armstrong'),
	automorphic = require('./automorphic'),
	fibonacci = require('./fibonacci'),
	magic = require('./magic'),
	neon = require('./neon'),
	palindrome = require('./palindrome'),
	prime = require('./prime');

/* Mathematical Utilities */

const gcd = require('./gcd'),
	isEven = require('./isEven'),
	isOdd = require('./isOdd'),
	lcm = require('./lcm'),
	length = require('./length'),
	max = require('./max'),
	min = require('./min'),
	sort = require('./sort'),
	sum = require('./sum');

/* M - mathball utility object */

module.exports = {
	isArmstrong: armstrong.isArmstrong,
	isAutomorphic: automorphic.isAutomorphic,
	fibonacci: fibonacci.fibonacci,
	magic: magic.magic,
	isNeon: neon.isNeon,
	isPalindrome: palindrome.isPalindrome,
	isPrime: prime.isPrime,
	gcd, isEven, isOdd, lcm, length, max, min, sort, sum
};
