const assert = require('assert'),
	isEven = require('../src/isEven').check;

describe('[Function: isEven]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof isEven, 'function');
	});

	it('should return a boolean when an integer is passed', () => {
		assert.strictEqual(typeof isEven(1), 'boolean');
	});

	it('should return \'true\' when \'44\' is passed', () => {
		assert.strictEqual(isEven(44), true);
	});

	it('should return \'false\' when \'35\' is passed', () => {
		assert.strictEqual(isEven(35), false);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => isEven(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => isEven('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => isEven(), TypeError);
	});

});
