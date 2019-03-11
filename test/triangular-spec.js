const assert = require('assert'),
triangular = require('../src/triangular').triangular;

describe('[Function: triangular]', () => {
	it('should be a function', () => {
		assert.strictEqual(typeof triangular, 'function');
	});

	it('should return true when 55 is passed', () => {
		assert.strictEqual(triangular(55), true);
	});

	it('should return false when 40 is passed', () => {
		assert.strictEqual(triangular(40), false);
	});

	it('should throw an error when a boolean is passed', () => {
		assert.throws(() => triangular(true), TypeError);
	});

	it('should throw an error if a string is passed', () => {
		assert.throws(() => triangular('hello'), TypeError);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => triangular(-4), TypeError);
	});
});
