const assert = require('assert'),
	isArmstrong = require('../src/armstrong').isArmstrong;

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

});
