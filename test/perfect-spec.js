const assert = require('assert'),
    perfect = require('../src/perfect').check;

describe('[Function: perfect]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof perfect, 'function');
	});

	it('should return a boolean value when a positive integer is passed', () => {
		assert.strictEqual(typeof perfect(1), 'boolean');
	});

	it('should return \'true\' when \'496\' is passed', () => {
		assert.strictEqual(perfect(496), true);
	});

	it('should return \'false\' when \'34\' is passed', () => {
		assert.strictEqual(perfect(34), false);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => perfect(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => perfect(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => perfect('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => perfect(), TypeError);
	});

});
