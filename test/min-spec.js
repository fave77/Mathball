const assert = require('assert'),
	min = require('../src/min');

describe('[Function: min]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof min, 'function');
	});

	it('should return a number when an array of number is passed', () => {
		assert.strictEqual(typeof min([1, 1]), 'number');
	});

	it('should return \'-5.4\' when \'[-5.4, -5, 2, 10]\' is passed', () => {
		assert.strictEqual(min([-5.4, -5, 2, 10]), -5.4);
	});

	it('should return \'0\' when \'[1, 0, 3, 22]\' is passed', () => {
		assert.strictEqual(min([1, 0, 3, 22]), 0);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => min(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => min(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => min('31'), TypeError);
	});

	it('should throw an error when a boolean is passed', () => {
		assert.throws(() => min(true), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => min(), TypeError);
	});

});
