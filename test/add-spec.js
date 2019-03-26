const assert = require('assert'),
	add = require('../src/add'),
	Complex = require('../src/complex'),
	a = new Complex(7,3),
	b = new Complex(4,6);

describe('[Function: add]', () => {
	it('should return a function', () => {
		assert.strictEqual(typeof add, 'function');
	});

	it('should throw a TypeError if no parameter is passed', () => {
		assert.throws(() => add(), TypeError);
	});

	it('should throw a TypeError when one parameter is passed', () => {
		assert.throws(() => add([1,2,3,4]), TypeError);
	});

	it('should return -6 when (-2,-4 is passed', () => {
		assert.strictEqual(add(-2,-4), -6);
	});

	it('should return 15 when (1,2,3,4,5) is passed', () => {
		assert.strictEqual(add(1,2,3,4,5), 15);
	});

	it('should return 12.2 when (1.2,4.5,6.5) is passed', () => {
		assert.strictEqual(add(1.2,4.5,6.5), 12.2);
	});

	it('should return 15 when strings (1,2,3,4,5) is passed', () => {
		assert.strictEqual(add('1','2','3','4','5'), "15");
	});

	it('should return [2,4,6,8,10] when [1,2,3,4,5],[1,2,3,4,5] is passed', () => {
		assert.deepStrictEqual(add([1,2,3,4,5],[1,2,3,4,5]), [2,4,6,8,10]);
	});

	it('should return [3,6,9,12,15] when [1,2,3,4,5] is passed thrice', () => {
		assert.deepStrictEqual(add([1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]), [3,6,9,12,15]);
	});

	it('should return [[14]] when ([[1]],[[5]],[[8]]) is passed', () => {
		assert.deepStrictEqual(add([[1]], [[5]], [[8]]), [[14]]);
	});

	it('should return [[1,5],[10,6]] when [[1,2],[2,5]],[[0,3],[8,1]] is passed', () => {
		assert.deepStrictEqual(add([[1,2],[2,5]],[[0,3],[8,1]]), [[1,5], [10,6]]);
	});

	it('should return an object when Complex objects a,b are passed', () => {
		assert.deepStrictEqual(add(a,b), {re: 11, im: 9});
	});

	it('should throw an error when boolean values are passed', () => {
		assert.throws(() => add(false, true, false), TypeError);
	});

	it('should throw an error when there is type difference', () => {
		assert.throws(() => add(1,2,4,'6',7), TypeError);
	});

	it('should throw an error when there is type difference', () => {
		assert.throws(() => add(1.2,1.4,[1,2,3],5.6), TypeError);
	});

	it('should throw an error when there is a type difference', () => {
		assert.throws(() => add('1','2', 3, '4'), TypeError);
	});

	it('should throws an error when the object is not of Complex', () => {
		assert.throws(() => add(a,{p: 30, r: 20}), TypeError);
	});

	it('should throw an error when no object match', () => {
		assert.throws(() => add({p: 30, q: 20}, a, {r: 10, s: 5}), TypeError);
	});

	it('should throw an error when matrix has a length difference', () => {
		assert.throws(() => add([[1]], [[1,2,3]], [[8]]), TypeError);
	});

	it('should throw an error when matrix has a type difference', () => {
		assert.throws(() => add([[2]], [['5']], [['8']]), TypeError);
	});

	it('should throw an error when 1D array has length difference', () => {
		assert.throws(() => add([1,2,3,4,5],[1,2,3,4]), TypeError);
	});

	it('should throw an error when 1D array has type difference', () => {
		assert.throws(() => add([1,2,3,'4',5],[1,2,3,4,5]), TypeError);
	});


});
