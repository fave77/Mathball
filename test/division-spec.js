const assert = require('assert'),
	div = require('../src/division').div,
	Complex = require('../src/complex'),
	a = new Complex(7,3),
	b = new Complex(4,6);

describe('[Function: div]', () => {
	it('should return a function', () => {
		console.log(typeof div);
		assert.strictEqual(typeof div, 'function');
	});

	it('should throw a TypeError if no parameter is passed', () => {
		assert.throws(() => div(), TypeError);
	});

	it('should throw a TypeError when one parameter is passed', () => {
		assert.throws(() => div([1,2,3,4]), TypeError);
	});

	it('should return 1 when (4,2) is passed', () => {
		assert.strictEqual(div(4,2), 2);
	});

	it('should return 4.2 when (8.4, 2.0) is passed', () => {
		assert.strictEqual(div(8.4,2.0), 4.2);
	});

	it('should throw an error when (1,2,4) is passed', () => {
		assert.throws(() => div(1,2,4), TypeError);
	});

	it('should return "4.2" when strings (8.4,2.0) is passed', () => {
		assert.strictEqual(div('8.4','2.0'), "4.2");
	});

	it('should return [2,3] when [12,9],[6,3] is passed', () => {
		assert.deepStrictEqual(div([12,9],[6,3]), [2,3]);
	});

	it('should return 0 if determinant is zero', () => {
		assert.deepStrictEqual(div([[0,0]],[[0,0]]), 0);
	});

	it('should return 1 when 1x1 matrix is passed', () => {
		assert.strictEqual(div([[4]],[[4]]), 1)
	});

	it('should return [[1,0],[0,1]] when ([[4,3],[3,2]],[[4,3], [3,2]]) is passed', () => {
		assert.deepStrictEqual(div([[4,3],[3,2]], [[4,3],[3,2]]), [[1,0], [0,1]]);
	});

	it('should return [[1,-0,-0],[-0,1,-0],[-0,-0,1]] when same 3x3 matrix is passed', () => {
		assert.deepStrictEqual(div([[4,7,2],[2,6,4],[1,2,3]], [[4,7,2],[2,6,4],[1,2,3]]), [[1,-0,-0],[-0,1,-0],[-0,-0,1]]);
	});

	it('should return an object when Complex objects a,b are passed', () => {
		assert.deepStrictEqual(div(a,b), {re: 0.77, im: -0.58});
	});
	it('should throw an error when boolean values are passed', () => {
		assert.throws(() => div(false, true), TypeError);
 	});

	 it('should throw an error when there is type difference', () => {
		assert.throws(() => div(1,'6'), TypeError);
 	});

	 it('should throw an error when there is a type difference', () => {
		assert.throws(() => div('1',3), TypeError);
 	});

	 it('should throws an error when the object is not of Complex', () => {
		assert.throws(() => div(a,{p: 30, r: 20}), TypeError);
 	});

	 it('should throw an error when no object match', () => {
		assert.throws(() => div({p: 30, q: 20}, a), TypeError)
 	});

	 it('should throw an error when matrix has a length difference', () => {
		assert.throws(() => div([[1]], [[1,2]]), TypeError);
 	});

	 it('should throw an error when matrix has a type difference', () => {
		assert.throws(() => div([[1]], [['5']]), TypeError);
 	});

	 it('should throw an error when 1D array has length difference', () => {
		assert.throws(() => div([1,2,3,4,5],[1,2,3,4]), TypeError);
	});

	 it('should throw an error when 1D array has type difference', () => {
		assert.throws(() => div([1,2,3,'4',5],[1,2,3,4,5]), TypeError);
	});
});
