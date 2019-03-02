const assert = require('assert'),
	performance = require('../src/performance');

describe('[Function: performance]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof performance, 'function');
	});

	it('should return \'undefined\'', () => {
		assert.strictEqual(performance(Math.pow, 2, 3), undefined);
	});

	it('should return \'undefined\'', () => {
		assert.strictEqual(performance(Math.sqrt, 4), undefined);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => performance(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => performance(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => performance('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => performance(), TypeError);
	});

	it('should throw a RangeError when there is more than 3 args', () => {
		assert.throws(() => performance(Number, 2, 3, 4, 5), RangeError);
	});

	it('should reuturn \'undefined\'', () => {
		assert.strictEqual(performance(Math.sqrt), undefined);
	});

	it('should return \'undefined\'', () => {
		assert.strictEqual(performance(Math.pow, 1, 2, 3), undefined);
	});
});
