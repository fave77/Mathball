const assert = require('assert'),
triangular = require('../src/triangular').find;

describe('[Function: triangular]', () => {
	it('should be a function', () => {
		assert.strictEqual(typeof triangular, 'function');
	});

	it('should return 36 when 8 is passed', () => {
		assert.strictEqual(triangular(8), 36);
	});

	it('should throw an error when a boolean is passed', () => {
		assert.throws(() => triangular(true), TypeError);
	});

	it('should throw an error if a string is passed', () => {
		assert.throws(() => triangular('hello'), TypeError);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => triangular(-4), TypeError);
	});
});
