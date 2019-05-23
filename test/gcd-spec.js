const assert = require('assert'),
	gcd = require('../src/gcd');

describe('[Function: gcd]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof gcd, 'function');
	});


	it('should return a number when an array of number is passed', () => {
		assert.strictEqual(typeof gcd([1, 1]), 'number');
	});

	it('should return \'6\' when \'[12, 18, 24]\' is passed', () => {
		assert.strictEqual(gcd([12, 18, 24]), 6);
	});

	it('should return \'4\' when \'[24, 28]\' is passed', () => {
		assert.strictEqual(gcd([24, 28]), 4);
	});
	it('should return \'0.012\' when \'0.48, 0.108\' are passed', () => {
		assert.strictEqual(gcd([0.48, 0.108]), 0.012);
	});

	it('should return \'2.2\' when \'8.8,6.6\' are passed', () => {
		assert.strictEqual(gcd([8.8,6.6]), 2.2);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => gcd(-20), TypeError);
	});

	 
    it('should throw an error when a string is passed', () => {
		assert.throws(() => gcd('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => gcd(), TypeError);
	});

	it('should throw an error when arguments are not numbers', () => {
		assert.throws(() => gcd(['string', 'string']), TypeError);
	});

});
