const assert = require('assert'),
	median = require('../src/median');

describe('[Function: median]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof median, 'function');
	});

	it('should return a number when an array of number is passed', () => {
		assert.strictEqual(typeof median([1, 1]), 'number');
	});

	it('should return \'12.57\' when \'[12.57, 5.23, 24]\' is passed', () => {
		assert.strictEqual(median([12.57, 5.23, 24]), 12.57);
	});

	it('should return \'0\' when \'[-2, -1, 1, 2]\' is passed', () => {
		assert.strictEqual(median([-2, -1, 1, 2]), 0);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => median(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => median(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => median('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => median(), TypeError);
	});

});
