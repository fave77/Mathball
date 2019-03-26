const assert = require('assert'),
	abs = require('../src/absolute'),
	Complex = require('../src/complex'),
	a = new Complex(7,3),
	b = new Complex(3,4);

describe('[Function: abs]', () => {
	it('should return a function', () => {
		assert.strictEqual(typeof abs, 'function');
	});

	it('should throw a TypeError if no parameter is passed', () => {
		assert.throws(() => abs(), TypeError);
	});

	it('should throw a TypeError when two parameters are passed', () => {
		assert.throws(() => abs(1,2), TypeError);
	});

	it('should return 14 when -14 is passed', () => {
		assert.strictEqual(abs(-14), 14);
	});

	it('should return 12.24 when -12.24 is passed', () => {
		assert.strictEqual(abs(-12.24), 12.24);
	});

	it('should throw an error when (1,2,4) is passed', () => {
		assert.throws(() => abs(1,2,4), TypeError);
	});

	it('should return "20" when string "-20" is passed', () => {
		assert.strictEqual(abs('-20'), "20");
	});

	it('should return 0 when [12,9] is passed', () => {
		assert.deepStrictEqual(abs([12,9]), 0);
	});

	it('should return 2 when [[2]] is passed', () => {
		assert.strictEqual(abs([[2]]), 2);
	});

	it('should return 12 when ([[3,2],[5,4]]) is passed', () => {
		assert.deepStrictEqual(abs([[3,2],[5,4]]), 2);
	});

	it('should return 306 when [[6,1,1],[4,-2,5],[2,8,7]] is passed', () => {
		assert.strictEqual(abs([[6,1,1],[4,-2,5],[2,8,7]]), 306);
	});

	it('should return 7.62 when Complex objects a are passed', () => {
		assert.deepStrictEqual(abs(a), 7.62);
	});

	it('should return 5 when Complex object b is passed', () => {
		assert.strictEqual(abs(b), 5);
	});

	it('should throw an error when boolean values are passed', () => {
		assert.throws(() => abs(false), TypeError);
 	});

	it('should throw an error when wrong dimensions of matrix is passed [[1,2,3,4],[1,2,3,4]]', () => {
		assert.throws(() => abs([[1,2,3,4],[1,2,3,4]]), TypeError);
});

	it('should return 5 when 5 is passed', () => {
		assert.strictEqual(abs(5), 5);
	});

	it('should return "9" when "9" is passed', () => {
		assert.strictEqual(abs('9'), "9");
	});
});
