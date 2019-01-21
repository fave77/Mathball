const assert = require('assert'),
	isNeon = require('../src/neon').isNeon;

describe('[Function: isNeon]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof isNeon, 'function');
	});

	it('should return a boolean value when a positive integer is passed', () => {
		assert.strictEqual(typeof isNeon(1), 'boolean');
	});

	it('should return \'true\' when \'9\' is passed', () => {
		assert.strictEqual(isNeon(9), true);
	});

	it('should return \'false\' when \'7\' is passed', () => {
		assert.strictEqual(isNeon(7), false);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => isNeon(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => isNeon(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => isNeon('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => isNeon(), TypeError);
	});

});
