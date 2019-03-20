const assert = require('assert'),
	popcount = require('../src/popcount').popcount;

describe('[Function: popcount]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof popcount, 'function');
	});

	it('should return a number when a positive integer is passed', () => {
		assert.strictEqual(typeof popcount(1), 'number');
	});

	it('should return \'2\' when \'6\' is passed', () => {
		assert.strictEqual(popcount(6), 2);
	});

	it('should return \'4\' when \'15\' is passed', () => {
		assert.strictEqual(popcount(15), 4);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => popcount(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => popcount(27.996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => popcount('47'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => popcount(), TypeError);
	});

});