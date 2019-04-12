const assert = require('assert'),
	Matrix = require('../src/Matrix'),
	x = new Matrix([[1, 2], [3, 4]]),
	y = new Matrix([[4, 7, 1], [3, 2, -1]]),
	f = new Matrix([[1, 0, 0], [0, 0, 1]]),
	upper = new Matrix([[1, 2, 3, 4], [0, 1, 2, 3], [0, 0, 1, 2], [0, 0, 0, 1]]),
	lower = new Matrix([[1, 0, 0, 0], [1, 2, 0, 0], [1, 2, 3, 0], [1, 2, 3, 4]]),
	identity = new Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);


describe('[Function: Matrix]', () => {
	it('should return a function', () => {
		assert.strictEqual(typeof Matrix, 'function');
	});

	it('should be an object', () => {
		assert.strictEqual(typeof x, 'object');
	});

	it('should return 26000 when [40,20,30,10,30] is passed to chainOrder', () => {
		assert.strictEqual(Matrix.chainOrder([40, 20, 30, 10, 30]), 26000);
	});

	it('should throw a TypeError when 30,40,50 is passed to chainOrder', () => {
		assert.throws(() => Matrix.chainOrder(30, 40, 50), TypeError);
	});

	it('should return 3 when loc is called with 2,1', () => {
		assert.strictEqual(x.loc(2, 1), 3);
	});

	it('should throw an error when loc is called with "2", "1"', () => {
		assert.throws(() => x.loc('2', '1'), TypeError);
	});

	it('should return primary elements of the diagonal', () => {
		assert.deepStrictEqual(x.diag('primary'), [1, 4]);
	});

	it('should return secondary elements of diagonal', () => {
		assert.deepStrictEqual(x.diag('secondary'), [2, 3]);
	});

	it('should throw an error when diag is called with a non-sqaure matrix', () => {
		assert.throws(() => f.diag('primary'), TypeError);
	});

	it('should return true if the matrix is square matrix', () => {
		assert.strictEqual(x.check('square'), true);
	});

	it('should return false if the matrix is not square matrix', () => {
		assert.strictEqual(f.check('square'), false);
	});

	it('should throws an error if the matrix is not square and checks identity', () => {
		assert.throws(() => f.check('identity'), TypeError);
	});

	it('should return false if the matrix is square and not identity', () => {
		assert.strictEqual(x.check('identity'), false);
	});

	it('should return true if the matrix is identity', () => {
		assert.strictEqual(identity.check('identity'), true);
	});

	it('should return false if the matrix is not upper-triangular', () => {
		assert.strictEqual(x.check('upper-triangular'), false);
	});

	it('should throw an error if the matrix is not a square and checks uppper-triangular', () => {
		assert.throws(() => f.check('upper-triangular'), TypeError);
	});

	it('should return true if the matrix is upper-triangular', () => {
		assert.strictEqual(upper.check('upper-triangular'), true);
	});

	it('should return false if the matrix is not lower-triangular', () => {
		assert.strictEqual(x.check('lower-triangular'), false);
	});

	it('should throw an error if the matrix is not a square and checks lower-triangular', () => {
		assert.throws(() => f.check('lower-triangular'), TypeError);
	});

	it('should return true if the matrix is lower-triangular', () => {
		assert.strictEqual(lower.check('lower-triangular'), true);
	});

	it('should return [[7,10],[15,22]] when pow is called with 2', () => {
		assert.deepStrictEqual(x.pow(2), [[7, 10], [15, 22]]);
	});

	it('should throw an error if a string or floating point is passed to pow', () => {
		assert.throws(() => x.pow('2'), TypeError);
	});

	it('should throw an error if a number is passed to diag()', () => {
		assert.throws(() => x.diag(4), TypeError);
	});

	it('should throw a TypeError when type passed to diag() is not correct', () => {
		assert.throws(() => x.diag('tertiary'), TypeError);
	});

	it('should throw a TypeError when a number is passed to check', () => {
		assert.throws(() => x.check(3), TypeError);
	});

	it('should throw a TypeError when property passed to check() is not correct', () => {
		assert.throws(() => x.check('circle'), TypeError);
	});

	it('should throw a TypeError when a 1D array is passed', () => {
		assert.throws(() => {
			const z = new Matrix([3, 4, 5, 6, 7, 8]);
			z.loc(2, 1);
		}, TypeError);
	});

	it('should throw a TypeError when matrix does not contain positive integers', () => {
		assert.throws(() => {
			const z = new Matrix([[3, 4], ['4', '5']]);
		}, TypeError);
	});


	it('should return [[4,3],[7,2],[1,-1]] when transpose() is called', () => {
		assert.deepStrictEqual(y.transpose(), [[4, 3], [7, 2], [1, -1]]);
	});

	it('should return [[1,4,7],[-1,2,3]] when sort is called with \'row\'', () => {
		assert.deepStrictEqual(y.sort('row'), [[1, 4, 7], [-1, 2, 3]]);
	});

	it('should return [[-1,2,3 ],[1,4,7]] when sort is called with \'col\'', () => {
		assert.deepStrictEqual(y.sort('col'), [[-1, 2, 3], [1, 4, 7]]);

	});

	it('should throw an error if a integer or floating point is passed to sort()', () => {
		assert.throws(() => x.sort(2), TypeError);
	});

	it('should throw an error if wrong type is passed to sort()', () => {
		assert.throws(() => x.sort('cosds'), TypeError);
	});

	it('should throw an error if no argument is passed to sort()', () => {
		assert.throws(() => x.sort(), TypeError);
	});
});
