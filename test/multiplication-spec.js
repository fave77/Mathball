const assert = require('assert'),
	mul = require('../src/multiplication').mul,
	Complex = require('../src/complex'),
	a = new Complex(7,3),
	b = new Complex(4,6);

describe('[Function: mul]', () => {
	it('should return a function', () => {
		console.log(typeof mul);
		assert.strictEqual(typeof mul, 'function');
	});

	it('should throw a TypeError if no parameter is passed', () => {
		assert.throws(() => mul(), TypeError);
	});

	it('should throw a TypeError when one parameter is passed', () => {
		assert.throws(() => mul([1,2,3,4]), TypeError);
	});

	it('should return 2 when (1,2) is passed', () => {
		assert.strictEqual(mul(1,2), 2);
	});

	it('should return 0.24 when (1.2, 0.2) is passed', () => {
		assert.strictEqual(mul(1.2,0.2), 0.24);
	});

	it('should throw an error when (1,2,4) is passed', () => {
		assert.throws(() => mul(1,2,4), TypeError);
	});

	it('should return "2" when strings (1,2) is passed', () => {
		assert.strictEqual(mul('1','2'), "2");
	});

	it('should return [72,54] when [12,9],[6,6] is passed', () => {
		assert.deepStrictEqual(mul([12,9],[6,6]), [72,54]);
	});

	it('should return [[4,4],[10,8]] when ([[1,2],[3,4]],[[2,0],[1,2]]) is passed', () => {
		assert.deepStrictEqual(mul([[1,2],[3,4]], [[2,0],[1,2]]), [[4,4],[10,8]]);
	});

	it('should return an object when Complex objects a,b are passed', () => {
		assert.deepStrictEqual(mul(a,b), {re: 28, im: 18});
	});
	it('should throw an error when boolean values are passed', () => {
		assert.throws(() => mul(false, true), TypeError);
 	});

	 it('should throw an error when there is type difference', () => {
		assert.throws(() => mul(1,'6'), TypeError);
 	});

	 it('should throw an error when there is a type difference', () => {
		assert.throws(() => mul('1',3), TypeError);
 	});

	 it('should throws an error when the object is not of Complex', () => {
		assert.throws(() => mul(a,{p: 30, r: 20}), TypeError);
 	});

	 it('should throw an error when no object match', () => {
		assert.throws(() => mul({p: 30, q: 20}, a), TypeError)
 	});

	 it('should throw an error when matrix has a length difference', () => {
		assert.throws(() => mul([[1]], [[1,2]]), TypeError);
 	});

	 it('should throw an error when matrix has a type difference', () => {
		assert.throws(() => mul([[1]], [['5']]), TypeError);
 	});

	 it('should throw an error when 1D array has length difference', () => {
		assert.throws(() => mul([1,2,3,4,5],[1,2,3,4]), TypeError);
	});

	 it('should throw an error when 1D array has type difference', () => {
		assert.throws(() => mul([1,2,3,'4',5],[1,2,3,4,5]), TypeError);
	});

	it('should return -80 when -8, 10 is passed', () => {
		assert.strictEqual(mul(-8,10), -80);
	});
});
