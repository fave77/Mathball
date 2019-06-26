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

	it('should return \'1.1\' when \'[1.1, 5.5]\' is passed', () => {
		assert.strictEqual(gcd([1.1, 5.5]), 1.1);
	});

	it('should return \'0.0000001\' when \'[923.2398423, 9497853.2249]\' is passed', () => {
		assert.strictEqual(gcd([923.2398423, 9497853.2249]), 0.0000001);
	});

	it('should return \'2\' when \'[-8, 6] is passed\'', () => {
		assert.strictEqual(gcd([-8, 6]), 2);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => gcd(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => gcd(31.101996), TypeError);
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
