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

});
