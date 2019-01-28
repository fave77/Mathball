/* Types of Numbers */

const armstrong = require("./armstrong"),
	automorphic = require("./automorphic"),
	fibonacci = require("./fibonacci"),
	magic = require("./magic"),
	neon = require("./neon"),
	palindrome = require("./palindrome"),
	prime = require("./prime"),
	factorial = require("./factorial"),
	catalan = require("./catalan"),
	kaprekar = require("./kaprekar"),
	lucky = require("./lucky"),
	smart = require("./smart");

/* Mathematical Utilities */

const gcd = require("./gcd"),
	isEven = require("./isEven"),
	isOdd = require("./isOdd"),
	lcm = require("./lcm"),
	length = require("./length"),
	max = require("./max"),
	min = require("./min"),
	sort = require("./sort"),
	sum = require("./sum");

/* M - mathball utility object */

module.exports = {
	isArmstrong: armstrong.isArmstrong,
	isAutomorphic: automorphic.isAutomorphic,
	fibonacci: fibonacci.fibonacci,
	magic: magic.magic,
	factorial: factorial.factorial,
	isNeon: neon.isNeon,
	isPalindrome: palindrome.isPalindrome,
	isPrime: prime.isPrime,
	catalan: catalan.catalan,
	isKaprekar: kaprekar.isKaprekar,
	isLucky: lucky.isLucky,
	smart: smart.smart,
	gcd,
	isEven,
	isOdd,
	lcm,
	length,
	max,
	min,
	sort,
	sum
};
