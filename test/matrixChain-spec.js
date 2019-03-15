const assert = require('assert'),
	matrixChain = require('../src/matrixChain').matrixChain;

describe('[Function: matrixChain]', () => {
		assert.strictEqual(typeof matrixChain, 'function');

	it('should return 4500 when [10,30,5,60] is passed', () => {
		assert.strictEqual(matrixChain([10,30,5,60]), 4500);
	});

	it('should return 14000 when [40,20,30,10] is passed', () => {
		assert.strictEqual(matrixChain([40,20,30,10]), 14000);
	});

	it('should return 78 when [2,3,5,2,4,3] is passed', () => {
		assert.strictEqual(matrixChain([2,3,5,2,4,3]), 78);
	});

	it('should throw a TypeError when just an integer is passed', () => {
		assert.throws(() => matrixChain(20), TypeError);
	});

	it('should throw a TypeError when a negative number is passed in the array', () => {
		assert.throws(() => matrixChain([10,-20, -40,20]), TypeError);
	});

	it('should throw an error for string input', () => {
		assert.throws(() => matrixChain(['10','20','30']), TypeError);
	});

	it('should not accept a floating point', () => {
		assert.throws(() => matrixChain([1.3, 4.5, 5.4, 6.7]), TypeError);
	});

	it('should not accept a boolean', () => {
		assert.throws(() => matrixChain([true, false, true, false]), TypeError);
	});
});
