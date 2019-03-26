const assert = require('assert'),
	avg = require('../src/average');

describe('[Function: avg]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof avg, 'function');
	});

	it('should return a number when an array of number is passed', () => {
		assert.strictEqual(typeof avg([1, 1]), 'number');
	});

	it('should return \'13.93333\' when \'[12.57, 5.23, 24]\' is passed', () => {
		assert.strictEqual(avg([12.57, 5.23, 24]), 13.93333);
	});

	it('should return \'0\' when \'[-2, -1, 1, 2]\' is passed', () => {
		assert.strictEqual(avg([-2, -1, 1, 2]), 0);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => avg(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => avg(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => avg('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => avg(), TypeError);
	});

});
