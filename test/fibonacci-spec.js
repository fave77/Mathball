const assert = require('assert'),
	fibonacci = require('../src/fibonacci').fibonacci;

describe('[Function: fibonacci]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof fibonacci, 'function');
	});

	it('should return a number when a positive integer is passed', () => {
		assert.strictEqual(typeof fibonacci(1), 'number');
	});

	it('should return \'8\' when \'6\' is passed', () => {
		assert.strictEqual(fibonacci(6), 8);
	});

	it('should return \'610\' when \'15\' is passed', () => {
		assert.strictEqual(fibonacci(15), 610);
	});

});
