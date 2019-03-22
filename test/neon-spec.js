const assert = require('assert'),
	neon = require('../src/neon').check;

describe('[Function: neon]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof neon, 'function');
	});

	it('should return a boolean value when a positive integer is passed', () => {
		assert.strictEqual(typeof neon(1), 'boolean');
	});

	it('should return \'true\' when \'9\' is passed', () => {
		assert.strictEqual(neon(9), true);
	});

	it('should return \'false\' when \'7\' is passed', () => {
		assert.strictEqual(neon(7), false);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => neon(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => neon(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => neon('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => neon(), TypeError);
	});

});
