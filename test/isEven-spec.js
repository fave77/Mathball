const assert = require('assert'),
	isEven = require('../src/isEven');

describe('[Function: isEven]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof isEven, 'function');
	});

	it('should return a boolean when an integer is passed', () => {
		assert.strictEqual(typeof isEven(1), 'boolean');
	});

	it('should return \'true\' when \'44\' is passed', () => {
		assert.strictEqual(isEven(44), true);
	});

	it('should return \'false\' when \'35\' is passed', () => {
		assert.strictEqual(isEven(35), false);
	});

});
