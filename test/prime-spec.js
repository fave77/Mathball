const assert = require('assert'),
	prime = require('../src/prime'),
	isPrime = prime.isPrime,
	rangePrime = prime.rangePrime;

describe('[Function: isPrime]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof isPrime, 'function');
	});

	it('should return a boolean value when a positive integer is passed', () => {
		assert.strictEqual(typeof isPrime(1), 'boolean');
	});

	it('should return \'true\' when \'23\' is passed', () => {
		assert.strictEqual(isPrime(23), true);
	});

	it('should return \'false\' when \'35\' is passed', () => {
		assert.strictEqual(isPrime(35), false);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => isPrime(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => isPrime(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => isPrime('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => isPrime(), TypeError);
	});

});

describe('[Function: rangePrime]', () => {
	it('should be a function', () => {
		assert.strictEqual(typeof rangePrime, 'function');
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => rangePrime(-15), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => rangePrime(3.1415), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => rangePrime('14'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => rangePrime(), TypeError);
	});

	it('should return an array when a positive integer is passed', () => {
		assert.strictEqual(typeof rangePrime(1), 'object');
		assert.strictEqual(rangePrime(3).hasOwnProperty('length'), true);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => rangePrime(), TypeError);
	});

	it('should return \'[2]\' when \'2\' is passed', () => {
		assert.deepStrictEqual(rangePrime(2), [2]);
	});

	it('should return \'[2, 3, 5, 7, 11]\' when \'11\' is passed', () => {
		assert.deepStrictEqual(rangePrime(11), [2, 3, 5, 7, 11]);
	});

	it('should return \'[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]\' when \'31\' is passed', () => {
		assert.deepStrictEqual(rangePrime(31), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
	});

	it('should return \'[]\' when \'1\' is passed', () => {
		assert.deepStrictEqual(rangePrime(1), []);
	});

});