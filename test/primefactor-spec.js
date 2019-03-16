const assert = require('assert'),
findPrimeFactors = require('../src/primefactor').findPrimeFactors;

describe("[Function: findPrimeFactors]", () => {
	it("should be a function", () => {
		assert.strictEqual(typeof findPrimeFactors, "function");
	});

	it("should return '[2,5]' when '100' is passed", () => {
		assert.deepEqual(findPrimeFactors(100), [2, 2, 5, 5]);
	});

	it("should return '[101]' when '100' is passed", () => {
		assert.deepEqual(findPrimeFactors(101), [101]);
	});

	it("should throw an error when a negative number is passed", () => {
		assert.throws(() => findPrimeFactors(-20), TypeError);
	});

	it("should throw an error when a floating point is passed", () => {
		assert.throws(() => findPrimeFactors(31.101996), TypeError);
	});

	it("should throw an error when a string is passed", () => {
		assert.throws(() => findPrimeFactors("31"), TypeError);
	});

	it("should throw an error when no arguments passed", () => {
		assert.throws(() => findPrimeFactors(), TypeError);
	});
});
