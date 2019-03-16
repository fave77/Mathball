const assert = require('assert'),
      factorial = require('../src/factorial').find;  

describe('[Function: factorial]', () => {
	it('should be a function', () => {
		assert.strictEqual(typeof factorial, 'function');
	});

	it('should return 120 when 5 is passed', () => {
		assert.strictEqual(factorial(5), 120);
	});

	it('should return 1 when 0 is passed', () => {
		assert.strictEqual(factorial(0), 1);
	});

	it('should return 1 when 1 is passed', () => {
		assert.strictEqual(factorial(1), 1);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => factorial(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => factorial(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => factorial('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => factorial(), TypeError);
	});
});
