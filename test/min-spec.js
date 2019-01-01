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

});
