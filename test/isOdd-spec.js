const assert = require('assert'),
	isOdd = require('../src/isOdd');

describe('[Function: isOdd]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof isOdd, 'function');
	});

	it('should return a boolean when an integer is passed', () => {
		assert.strictEqual(typeof isOdd(1), 'boolean');
	});

	it('should return \'true\' when \'19\' is passed', () => {
		assert.strictEqual(isOdd(19), true);
	});

	it('should return \'false\' when \'56\' is passed', () => {
		assert.strictEqual(isOdd(56), false);
	});

});
