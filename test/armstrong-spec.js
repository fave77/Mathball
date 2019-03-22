const assert = require('assert'),
	isArmstrong = require('../src/armstrong').check;

describe('[Function: isArmstrong]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof isArmstrong, 'function');
	});

	it('should return a boolean value when a positive integer is passed', () => {
		assert.strictEqual(typeof isArmstrong(1), 'boolean');
	});

	it('should return \'true\' when \'153\' is passed', () => {
		assert.strictEqual(isArmstrong(153), true);
	});

	it('should return \'false\' when \'34\' is passed', () => {
		assert.strictEqual(isArmstrong(34), false);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => isArmstrong(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => isArmstrong(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => isArmstrong('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => isArmstrong(), TypeError);
	});

});
