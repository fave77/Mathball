const assert = require('assert'),
    isPerfect = require('../src/perfect').isPerfect;

describe('[Function: isPerfect]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof isPerfect, 'function');
	});

	it('should return a boolean value when a positive integer is passed', () => {
		assert.strictEqual(typeof isPerfect(1), 'boolean');
	});

	it('should return \'true\' when \'496\' is passed', () => {
		assert.strictEqual(isPerfect(496), true);
	});

	it('should return \'false\' when \'34\' is passed', () => {
		assert.strictEqual(isPerfect(34), false);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => isPerfect(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => isPerfect(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => isPerfect('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => isPerfect(), TypeError);
	});

});
