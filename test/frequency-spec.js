const assert = require('assert'),
	frequency = require('../src/frequency/index');

describe('[Function: frequency]', () => {
	it('should be a function', () => {
		assert.strictEqual(typeof frequency, 'function');
	});

	it('should return 3 when the following array and occurance is passed', () => {
		assert.strictEqual(frequency([1, 2, 3, 2, 1, 2], 2), 3);
	});

	it('should return 1 when the following string and occurance is passed', () => {
		assert.strictEqual(frequency('testing frequency', 'es'), 1);
	});

	it('should return 2 when the following string and occurance is passed', () => {
		assert.strictEqual(
			frequency(['testing', 'frequency', 'testing'], 'testing'),
			2
		);
	});

	it('should return 3 when the following array and occurance is passed', () => {
		assert.strictEqual(frequency([1, 2, 3, 1, 2, 4, 5, 1], 1), 3);
	});

	it('should return 2 when the following array and occurance is passed', () => {
		assert.strictEqual(frequency(['a', 'y', 'a', 'b', 'c', 'z', 'i'], 'a'), 2);
	});

	it('should return 1 when the following array and occurance is passed', () => {
		assert.strictEqual(
			frequency(['hello', 'world', 'lorem', 'ipsum', 'hello'], 'world'),
			1
		);
	});

	it('should return 0 when the following array and occurance is passed', () => {
		assert.strictEqual(
			frequency(['hello', 5, 'lorem', 7, 'ipsum', 'hello'], 'world'),
			0
		);
	});

	it('should return 2 when the following string and occurance is passed', () => {
		assert.strictEqual(frequency('banana', 'ana'), 2);
	});

	it('should throw TypeError when nothing is passed as arguments', () => {
		assert.throws(() => frequency(), TypeError);
	});
});
