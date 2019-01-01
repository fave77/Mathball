const assert = require('assert'),
	isAutomorphic = require('../src/automorphic').isAutomorphic;

describe('[Function: isAutomorphic]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof isAutomorphic, 'function');
	});

	it('should return a boolean value when a positive integer is passed', () => {
		assert.strictEqual(typeof isAutomorphic(1), 'boolean');
	});

	it('should return \'true\' when \'25\' is passed', () => {
		assert.strictEqual(isAutomorphic(25), true);
	});

	it('should return \'false\' when \'14\' is passed', () => {
		assert.strictEqual(isAutomorphic(14), false);
	});

});
