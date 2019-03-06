const assert = require('assert'),
	isHoax = require('../src/hoax').isHoax;

describe('[Function: isHoax]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof isHoax, 'function');
	});

	it('should return a boolean value when a positive integer is passed', () => {
		assert.strictEqual(typeof isHoax(1), 'boolean');
	});

	it('should return \'true\' when \'22\' is passed', () => {
		assert.strictEqual(isHoax(22), true);
	});

	it('should return \'false\' when \'19\' is passed', () => {
		assert.strictEqual(isHoax(19), false);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => isHoax(-15), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => isHoax(25.985), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => isHoax('57'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => isHoax(), TypeError);
	});

});
