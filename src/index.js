/* Numbers' Problem */
const Complex = require('./complex'),
	check = require('./check'),
	find = require('./find'),
	range = require('./range');

/* Helper Functions */
const perf = require('./performance'),
	pipe = require('./pipe');

/* Core Tools */
const abs = require('./absolute'),
	add = require('./add'),
	avg = require('./average'),
	nCr = require('./binomial-coeff'),
	/*===== */
	toDegrees = require('./degree'), //combine these two
	toRadians = require('./radian'), //modules into one, namely 'convert'
	/* convert = require('./convert'), */
	/*===== */
	count = require('./count'),
	div = require('./divide'),
	gcd = require('./gcd'),
	lcm = require('./lcm'),
	length = require('./length'),
	max = require('./max'),
	median = require('./median'),
	min = require('./min'),
	inverse = require('./inverse'),
	mul = require('./multiply'),
	permute = require('./permute'),
	phi = require('./totient'),
	popcount = require('./popcount'),
	pow = require('./pow'),
	sort = require('./sort'),
	sub = require('./subtract'),
	sum = require('./sum');

/* Data Structures */
const matrixChain = require('./matrixChain'), // module implementation under
	matrixExpo = require('./matrixExponentiation'), // one data type, 'Matrix'
	/*=====*/
	Graph = require('./graph'),
	PriorityQueue = require('./priority-queue'),
	Stack = require('./stack');

/* M - Mathball Object */
module.exports = {
	find,
	permute,
	gcd,
	add,
	sub,
	mul,
	div,
	abs,
	lcm,
	length,
	/* ===== */
	/* Replace these two with 'Matrix' */
	matrixChain: matrixChain.matrixChain,
	matrixExpo: matrixExpo.matrixExpo,
	/* ===== */
	max,
	median,
	min,
	nCr,
	perf,
	pipe,
	popcount,
	pow,
	phi,
	sort,
	sum,
	avg,
	inverse,
	count,
	PriorityQueue,
	Stack,
	Graph,
	range,
	Complex,
	check
};
