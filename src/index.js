/* Number Checkers */
const armstrong = require('./armstrong'),
	automorphic = require('./automorphic'),
	harshad = require('./harshad'),
	kaprekar = require('./kaprekar'),
	lucky = require('./lucky'),
	neon = require('./neon'),
	palindrome = require('./palindrome'),
	perfect = require('./perfect'),
	prime = require('./prime'),
	smith = require('./smith'),
	isDeficient = require('./isDeficient'),
	isFrugal = require('./isFrugal'),
	isStormer = require('./isStormer'),
	carmichael = require('./carmichael');

/* Find nth Number */
const bell = require('./bell'),
	catalan = require('./catalan'),
	factorial = require('./factorial'),
	fibonacci = require('./fibonacci'),
	magic = require('./magic'),
	nCr = require('./nCr'),
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
	pow = require('./pow'),
	sort = require('./sort'),
	sum = require('./sum'),
	toDegrees = require('./degree'),
	toRadians = require('./radian'),
	Complex = require('./complex');

/* Helper Methods */
const performance = require('./performance'),
	pipe = require('./pipe');

/* Data Structure */
const PriorityQueue = require('./PriorityQueue');

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
	isHarshad: harshad.isHarshad,
	isEven,
	isOdd,
	isKaprekar: kaprekar.isKaprekar,
	lcm,
	length,
	isLucky: lucky.isLucky,
	magic: magic.magic,
	max,
	min,
	nCr,
	isNeon: neon.isNeon,
	isPalindrome: palindrome.isPalindrome,
	rangePal:palindrome.rangePal,
	isPerfect: perfect.isPerfect,
	isFrugal: isFrugal.isFrugal,
	performance,
	pipe,
	pow,
	isPrime: prime.isPrime,
	isStormer: isStormer.isStormer,
	rangePrime: prime.rangePrime,
	smart: smart.smart,
	isSmith: smith.isSmith,
	sort,
	sum,
	toDegrees: toDegrees.toDegrees,
	toRadians: toString.toRadians,
	modInv: modInv.modInv,
	frequency,
	isDeficient,
	PriorityQueue,
	isCarmichael: carmichael.isCarmichael,
	rangeFibonacci: fibonacci.rangeFibonacci,
	Complex
};
