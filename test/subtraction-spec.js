const assert = require('assert'),
	sub = require('../src/subtraction').sub,
	Complex = require('../src/complex'),
	a = new Complex(7,3),
	b = new Complex(4,6);

describe('[Function: sub]', () => {
	it('should return a function', () => {
		assert.strictEqual(typeof sub, 'function');
	});
	it('should throw a TypeError if no parameter is passed', () => {
		assert.throws(() => sub(), TypeError);
	});
	it('should throw a TypeError when one parameter is passed', () => {
		assert.throws(() => sub([1,2,3,4]), TypeError);
	});
	it('should return 1 when (1,2) is passed', () => {
		assert.strictEqual(sub(1,2), -1);
	});
	it('should return 1.0 when (1.2, 0.2) is passed', () => {
		assert.strictEqual(sub(1.2,0.2), 1.0);
	});
	it('should throw an error when (1,2,4) is passed', () => {
		assert.throws(() => sub(1,2,4), TypeError);
	});
	it('should return -1 when strings (1,2) is passed', () => {
		assert.strictEqual(sub('1','2'), "-1");
	});
	it('should return [6,3] when [12,9],[6,6] is passed', () => {
		assert.deepStrictEqual(sub([12,9],[6,6]), [6,3]);
	});
	it('should return [[3]] when ([[8]],[[5]]) is passed', () => {
		assert.deepStrictEqual(sub([[8]], [[5]]), [[3]]);
	});
	it('should return [[1,2]] when [[3,4]],[[2,2]] is passed', () => {
		assert.deepStrictEqual(sub([[3,4]],[[2,2]]), [[1,2]]);
	});
	it('should return an object when Complex objects a,b are passed', () => {
		assert.deepStrictEqual(sub(a,b), {re: 3, im: -3});
	});
	it('should throw an error when boolean values are passed', () => {
		assert.throws(() => sub(false, true), TypeError);
	});
	it('should throw an error when there is type difference', () => {
		 assert.throws(() => sub(1,'6'), TypeError);
 	});
	it('should throw an error when there is a type difference', () => {
		assert.throws(() => sub('1',3), TypeError);
 	});
	it('should throws an error when the object is not of Complex', () => {
		 assert.throws(() => sub(a,{p: 30, r: 20}), TypeError);
 	});
	it('should throw an error when no object match', () => {
		assert.throws(() => sub({p: 30, q: 20}, a), TypeError)
 	});
	it('should throw an error when matrix has a length difference', () => {
		assert.throws(() => sub([[1]], [[1,2]]), TypeError);
 	});
	it('should throw an error when matrix has a type difference', () => {
		 assert.throws(() => sub([[1]], [['5']]), TypeError);
	});
	it('should throw an error when 1D array has length difference', () => {
		 assert.throws(() => sub([1,2,3,4,5],[1,2,3,4]), TypeError);
	});
	it('should throw an error when 1D array has type difference', () => {
		assert.throws(() => sub([1,2,3,'4',5],[1,2,3,4,5]), TypeError);
	});
});
