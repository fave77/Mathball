const assert = require('assert'),
        matrixExpo = require('../src/matrixExponentiation').matrixExpo;

describe('[Funtion: matrixExpo]',() => {

    it('should be a function', () => {
        assert.strictEqual(typeof matrixExpo, 'function');
    });

    it('should return an error if the matrix is not a square matrix', () => {
        assert.strictEqual(matrixExpo([[1,2], [3]], 2), "Not a square matrix");
    });

    it('should return an error if the power is not a positive integer', () => {
        assert.throws(() => matrixExpo([[1,2], [3,4]], -2), TypeError);
    });

    it('should return [[ 37, 54 ], [ 81, 118 ]] when ([[1,2], [3,4]], 3) is passed as arguments', () => {
        assert.deepEqual(matrixExpo([[1,2], [3,4]], 3), [[ 37, 54 ], [ 81, 118 ]] );
    });

    it('should return [[ 7, 10 ], [ 15, 22 ]] when ([[1,2], [3,4]], 2) is passed as arguments', () => {
        assert.deepEqual(matrixExpo([[1,2], [3,4]], 2), [[ 7, 10 ], [ 15, 22 ]] );
    });
});