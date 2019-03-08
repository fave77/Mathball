const assert = require('assert'),
	nCr = require('../src/nCr').nCr;

describe('[Function: nCr]', () => {
	it('should be a function', () => {
		assert.strictEqual(typeof nCr, 'function');
	});

	it('should return 10 when 5 and 2 is passed', () => {
		assert.strictEqual(nCr(5, 2), 10);
	});

	it('should return 3 when 3 and 2 is passed', () => {
		assert.strictEqual(nCr(3, 2), 3);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => nCr(-2, 1), TypeError);
	});

	it('should throw an error when first number is smaller than second is passed', () => {
		assert.throws(() => nCr(2, 3), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => nCr(31.101996, 2), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => nCr('31', 2), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => nCr(), TypeError);
	});
});
