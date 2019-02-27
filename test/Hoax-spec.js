const assert = require('assert'),
	isHoax = require('../src/hoax').isHoax;

describe('[Function: isHoax]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof isHoax, 'function');
	});

	it('should return a boolean value when a positive integer is passed', () => {
		assert.strictEqual(typeof isHoax(5), 'boolean');
	});

	it('should return \'true\' when \'84\' is passed', () => {
		assert.strictEqual(isHoax(84), true);
	});

	it('should return \'false\' when \'19\' is passed', () => {
		assert.strictEqual(isHoax(19), false);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => isHoax(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => isHoax(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => isHoax('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => isHoax(), TypeError);
	});

});
