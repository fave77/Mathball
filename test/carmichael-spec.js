const assert = require("assert"),
	isCarmichael = require("../src/carmichael").check;

describe("[Function: isCarmichael]", () => {
	it('should be a function', () => {
		assert.strictEqual(typeof isCarmichael, 'function');
	});

	it('should return a boolean value when a positive integer is passed', () => {
		assert.strictEqual(typeof isCarmichael(8), 'boolean');
	});

	it('should return true when 561 is passed', () => {
		assert.strictEqual(isCarmichael(561), true);
	});

	it('should return false if 8 is passed', () => {
		assert.strictEqual(isCarmichael(8), false);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => isCarmichael(-10), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => isCarmichael(7.2), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => isCarmichael('hello'), TypeError);
	});

	it('should throw an error when no arguments are passed', () => {
		assert.throws(() => isCarmichael(), TypeError);
	});
});
