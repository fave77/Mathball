const assert = require('assert'),
	hexagonal = require('../src/hexagonal').find;

describe('[Function: hexagonal]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof hexagonal, 'function');
	});

	it('should return a number when a positive integer is passed', () => {
		assert.strictEqual(typeof hexagonal(1), 'number');
	});

	it('should return \'66\' when \'6\' is passed', () => {
		assert.strictEqual(hexagonal(6), 66);
	});

	it('should return \'496\' when \'15\' is passed', () => {
		assert.strictEqual(hexagonal(15), 435);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => hexagonal(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => hexagonal(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => hexagonal('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => hexagonal(), TypeError);
	});

});