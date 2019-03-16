const assert = require('assert'),
	count = require('../src/count/index');

describe('[Function: count]', () => {
	it('should be a function', () => {
		assert.strictEqual(typeof count, 'function');
	});

	it('should return 3 when the following array and occurance is passed', () => {
		assert.strictEqual(count([1, 2, 3, 2, 1, 2], 2), 3);
	});

	it('should return 1 when the following string and occurance is passed', () => {
		assert.strictEqual(count('testing count', 'es'), 1);
	});

	it('should return 2 when the following string and occurance is passed', () => {
		assert.strictEqual(count(['testing', 'count', 'testing'], 'testing'),2);
	});

	it('should return 3 when the following array and occurance is passed', () => {
		assert.strictEqual(count([1, 2, 3, 1, 2, 4, 5, 1], 1), 3);
	});

	it('should return 2 when the following array and occurance is passed', () => {
		assert.strictEqual(count(['a', 'y', 'a', 'b', 'c', 'z', 'i'], 'a'), 2);
	});

	it('should return 1 when the following array and occurance is passed', () => {
		assert.strictEqual(count(['hello', 'world', 'lorem', 'ipsum', 'hello'], 'world'),1);
	});

	it('should return 0 when the following array and occurance is passed', () => {
		assert.strictEqual(count(['hello', 5, 'lorem', 7, 'ipsum', 'hello'], 'world'),0);
	});

	it('should return 2 when the following string and occurance is passed', () => {
		assert.strictEqual(count('banana', 'ana'), 2);
	});

	//Object type testing part
	it('should return 1 when the following object and occurance is passed', () => {
		assert.strictEqual(count({'ipsum': [true, 1]}, [true, 1]), 1);
	});

	it('should return 0 when the following object and occurance is passed', () => {
		assert.strictEqual(count({'ipsum': [true, 1]}, [false, 1]), 0);
	});

	it('should return 1 when nested object and occurance is passed', () => {
		assert.strictEqual(count({'ipsum': {true: 1}}, {true: 1}), 1);
	});

	it('should return 0 when nested object and occurance is passed', () => {
		assert.strictEqual(count({'ipsum': {true: 1}}, {true: 2}), 0);
	});

	it('should return 0 when nested object and occurance is passed', () => {
		assert.strictEqual(count({'ipsum': {true: 1}}, {false: 1}), 0);
	});

	it('should return 0 when the following object and occurance is passed', () => {
		assert.strictEqual(count({'ipsum': [true, 1]}, [true]), 0);
	});

	it('should return 0 when the following object and occurance is passed flag', () => {
		assert.strictEqual(count({'ipsum': [true, 1]}, [true, 2]), 0);
	});

	it('should return 2 when the following object and occurance is passed', () => {
		assert.strictEqual(count({'foo': 'bar', 'spam': 'egg', 'lorem': 'bar'}, 'bar'), 2);
	});

	it('should throw TypeError when a number is passed as arguments', () => {
		assert.throws(() => count(87), TypeError);
	});

	it('should throw TypeError when nothing is passed as arguments', () => {
		assert.throws(() => count(), TypeError);
	});
});