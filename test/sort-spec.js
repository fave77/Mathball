const assert = require('assert'),
	sort = require('../src/sort');

describe('[Function: sort]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof sort, 'function');
	});

	it('should return an array when an array of number is passed', () => {
		assert.strictEqual(typeof sort([1, 1]), 'object');
		assert.strictEqual(sort([1, 1]).hasOwnProperty('length'), true);
	});

	it('should return \'[0, 2, 4, 5, 8, 13]\' when \'[4, 5, 13, 2, 8, 0]\' is passed', () => {
		assert.deepStrictEqual(sort([4, 5, 13, 2, 8, 0]), [0, 2, 4, 5, 8, 13]);
	});

	it('should return \'[13, 8, 5, 4, 2, 0]\' when \'[4, 5, 13, 2, 8, 0] & false\' is passed', () => {
		assert.deepStrictEqual(sort([4, 5, 13, 2, 8, 0], false), [13, 8, 5, 4, 2, 0]);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => sort(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => sort(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => sort('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => sort(), TypeError);
	});

	it('should throw an error when `order` is not boolean', () => {
		assert.throws(() => sort([], 'hey yoo'), TypeError);
	});
});