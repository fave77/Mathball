const assert = require('assert'),
	range = require('../src/range'),
	rangePrime = range('prime'),
	rangePalindrome = range('palindrome');


describe('[Function: range]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof range, 'function');
	});

	it('should return `[0, 1, 1]` when fibonacci is passed as arg & 1 is passed as arg to fibonacci', () => {
		assert.deepEqual(range('fibonacci')(1), [0, 1, 1]);
	});

	it('should return `[0, 1, 1, 2]` when fibonacci is passed as arg & 2 is passed as arg to fibonacci', () => {
		assert.deepEqual(range('fibonacci')(2), [0, 1, 1, 2]);
    });

	it('should return [2, 3, 5, 7, 11, 13, 17, 19] when 20 is passed to rangePrime', () => {
		assert.deepStrictEqual(rangePrime(20), [2, 3, 5, 7, 11, 13, 17, 19]);
	});

	it('should return [55,66,77,88,99] when 50, 100 is passed to rangePalindrome', () => {
		assert.deepStrictEqual(rangePalindrome(50,100), [55,66,77,88,99]);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => range(), TypeError);
	});

	it('should throw an error when a number is passed', () => {
		assert.throws(() => range(31), TypeError);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => range(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => range(31.101996), TypeError);
	});
});
