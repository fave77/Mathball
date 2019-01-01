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

});
