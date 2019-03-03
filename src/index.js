/* Number Checkers */
const armstrong = require('./armstrong'),
	automorphic = require('./automorphic'),
	kaprekar = require('./kaprekar'),
	lucky = require('./lucky'),
	neon = require('./neon'),
	palindrome = require('./palindrome'),
	perfect = require('./perfect'),
	prime = require('./prime'),
	smith = require('./smith'),
	isDeficient = require('./isDeficient');

/* Find nth Number */
const bell = require('./bell'),
	catalan = require('./catalan'),
	factorial = require('./factorial'),
	fibonacci = require('./fibonacci'),
	magic = require('./magic'),
	padovan = require('./padovan'),
	smart = require('./smart');

/* Mathematical Utilities */
const frequency = require('./frequency'),
  gcd = require('./gcd'),
	isEven = require('./isEven'),
	isOdd = require('./isOdd'),
	lcm = require('./lcm'),
	length = require('./length'),
	max = require('./max'),
	min = require('./min'),
	modInv = require('./modInv'),
	sort = require('./sort'),
	sum = require('./sum'),
	priorityQueue = require('./priorityQueue');

/* Helper Methods */
const performance = require('./performance'),
	pipe = require('./pipe');

/* M - Mathball Object */
module.exports = {
	isArmstrong: armstrong.isArmstrong,
	isAutomorphic: automorphic.isAutomorphic,
	bell: bell.bell,
	catalan: catalan.catalan,
	factorial: factorial.factorial,
	fibonacci: fibonacci.fibonacci,
	padovan: padovan.padovan,
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
	rangePrime: prime.rangePrime,
	smart: smart.smart,
	isSmith: smith.isSmith,
	sort,
	sum,
	modInv: modInv.modInv,
	frequency,
	isDeficient,
	priorityQueue
};
