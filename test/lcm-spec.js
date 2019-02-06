const assert = require('assert'),
	lcm = require('../src/lcm');

describe('[Function: lcm]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof lcm, 'function');
	});

	it('should return a number when an array of number is passed', () => {
		assert.strictEqual(typeof lcm([1, 1]), 'number');
	});

	it('should return \'30\' when \'[2, 3, 5, 15]\' is passed', () => {
		assert.strictEqual(lcm([2, 3, 5, 15]), 30);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => lcm(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => lcm(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => lcm('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => lcm(), TypeError);
	});

});
