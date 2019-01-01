const assert = require('assert'),
	sum = require('../src/sum');

describe('[Function: sum]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof sum, 'function');
	});

	it('should return a number when an array of number is passed', () => {
		assert.strictEqual(typeof sum([1, 1]), 'number');
	});

	it('should return \'41.8\' when \'[12.57, 5.23, 24]\' is passed', () => {
		assert.strictEqual(sum([12.57, 5.23, 24]), 41.8);
	});

	it('should return \'0\' when \'[-2, -1, 1, 2]\' is passed', () => {
		assert.strictEqual(sum([-2, -1, 1, 2]), 0);
	});

});
