/* Number Checkers */
const armstrong = require('./armstrong'),
	automorphic = require('./automorphic'),
	kaprekar = require('./kaprekar'),
	lucky = require('./lucky'),
	neon = require('./neon'),
	palindrome = require('./palindrome'),
	perfect = require('./perfect'),
	prime = require('./prime'),
	smith = require('./smith');

/* Find nth Number */
const catalan = require('./catalan'),
	factorial = require('./factorial'),
	fibonacci = require('./fibonacci'),
	magic = require('./magic'),
	smart = require('./smart');

/* Mathematical Utilities */
const gcd = require('./gcd'),
	isEven = require('./isEven'),
	isOdd = require('./isOdd'),
	lcm = require('./lcm'),
	length = require('./length'),
	max = require('./max'),
	min = require('./min'),
	sort = require('./sort'),
	sum = require('./sum'),
	modInv = require('./modInv');

/* Helper Methods */
const performance = require('./performance'),
	pipe = require('./pipe');

/* M - Mathball Object */
module.exports = {
	isArmstrong: armstrong.isArmstrong,
	isAutomorphic: automorphic.isAutomorphic,
	catalan: catalan.catalan,
	factorial: factorial.factorial,
	fibonacci: fibonacci.fibonacci,
	gcd,
	isEven,
	isOdd,
	isKaprekar: kaprekar.isKaprekar,
	lcm,
	length,
	isLucky: lucky.isLucky,
	magic: magic.magic,
	max,
	min,
	isNeon: neon.isNeon,
	isPalindrome: palindrome.isPalindrome,
	isPerfect: perfect.isPerfect,
	performance,
	pipe,
	isPrime: prime.isPrime,
	smart: smart.smart,
	isSmith: smith.isSmith,
	sort,
	sum,
	modInv: modInv.modInv
};
