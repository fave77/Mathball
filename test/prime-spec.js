const assert = require('assert'),
	isPrime = require('../src/prime').isPrime;

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

});
