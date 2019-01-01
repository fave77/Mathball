const assert = require('assert'),
	length = require('../src/length');

describe('[Function: length]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof length, 'function');
	});

	it('should return a number when a number is passed', () => {
		assert.strictEqual(typeof length(1), 'number');
	});

	it('should return a number when a string is passed', () => {
		assert.strictEqual(typeof length('hello'), 'number');
	});

	it('should return a number when an array is passed', () => {
		assert.strictEqual(typeof length([1, 2, 3]), 'number');
	});

	it('should return a number when an object is passed', () => {
		assert.strictEqual(typeof length({x: 0, y: 0}), 'number');
	});

	it('should return \'4\' when the number \'1745\' is passed', () => {
		assert.strictEqual(length(1745), 4);
	});

	it('should return \'6\' when the string \'bright\' is passed', () => {
		assert.strictEqual(length('bright'), 6);
	});

	it('should return \'3\' when the array \'[4, 5, 6]\' is passed', () => {
		assert.strictEqual(length([4, 5, 6]), 3);
	});

	it('should return \'0\' when the object \'{}\' is passed', () => {
		assert.strictEqual(length({}), 0);
	});

});
