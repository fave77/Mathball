const assert = require('assert'),
	fgcd = require('../src/fgcd');

describe('[Function: fgcd]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof fgcd, 'function');
	});

	it('should return a number when an two numbers are passed', () => {
		assert.strictEqual(typeof fgcd(0.3,0.9), 'number');
	});

	it('should return \'0.012\' when \'0.48, 0.108\' are passed', () => {
		assert.strictEqual(fgcd(0.48, 0.108), 0.012);
	});

	it('should return \'2.2\' when \'8.8,6.6\' are passed', () => {
		assert.strictEqual(fgcd(8.8,6.6), 2.2);
	});

	it('should throw an error when negative numbers is passed', () => {
		assert.throws(() => fgcd(-20,-2), TypeError);
	});


	it('should throw an error when strings is passed', () => {
		assert.throws(() => fgcd('31','1'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => fgcd(), TypeError);
	});

	it('should throw an error when arguments are not numbers', () => {
		assert.throws(() => fgcd('string', 'string'), TypeError);
	});

});
