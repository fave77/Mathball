/* Numbers' Problem */
const Complex = require('./complex'),
	check = require('./check'),
	find = require('./find'),
	range = require('./range');

/* Helper Functions */
const performance = require('./performance'),
	pipe = require('./pipe');

/* Core Tools */
const abs = require('./absolute'),
	add = require('./addition'),
	avg = require('./avg'),
	ncr = require('./nCr').nCr,
	/*===== */
	toDegrees = require('./degree'), //combine these two
	toRadians = require('./radian'), //modules into one, namely 'convert'
	/*===== */
	count = require('./count'),
	div = require('./division'),
	totient = require('./totient'),
	pow = require('./pow'),
	gcd = require('./gcd'),
	lcm = require('./lcm'),
	length = require('./length'),
	max = require('./max'),
	median = require('./median'),
	min = require('./min'),
	modInv = require('./modInv'),
	mul = require('./multiplication'),
	permutation=require('./permutation'),
	findPrimeFactors = require('./primefactor'),
	popcount = require('./popcount'),
	sort = require('./sort'),
	sub = require('./subtraction'),
	sum = require('./sum');

/* Data Structures */
const matrixMultiply = require('./matrixMultiply'), //change the three following
	matrixChain = require('./matrixChain'), // module implementation under
	matrixExpo = require('./matrixExponentiation'), // one data type, 'Matrix'
	/*=====*/
	Graph = require('./graph'),
	PriorityQueue = require('./PriorityQueue'),
	Stack = require('./stack');

/* M - Mathball Object */
module.exports = {
	find,
	permute:permutation.permutation,
	findPrimeFactors: findPrimeFactors.findPrimeFactors,
	gcd,
	add: add.add,
	sub: sub.sub,
	mul: mul.mul,
	div: div.div,
	abs: abs.abs,
	lcm,
	length,
	matrixMultiply,
	matrixChain: matrixChain.matrixChain,
	matrixExpo: matrixExpo.matrixExpo,
	max,
	median,
	min,
	ncr,
	performance,
	pipe,
	popcount,
	pow,
	phi: totient.phi,
	sort,
	sum,
	avg,
	toDegrees: toDegrees.toDegrees,
	toRadians: toRadians.toRadians,
	modInv: modInv.modInv,
	count,
	PriorityQueue,
	Stack,
	Graph,
	range,
	Complex,
	check
};
