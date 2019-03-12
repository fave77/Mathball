const assert = require('assert'),
    matrixMult = require('../src/matrixMultiply');

describe('[Function: matrixMultiply]', () => {

    it('should be a function', () => {
        assert.strictEqual(typeof matrixMult, "function");
    });

    it('should return an error when matrices of wrong dimensions are entered', () => {
        assert.strictEqual(matrixMult([[1,2,3],[1,2]], [[3],[1,2]]), "Matrices are not compatible for multiplication");
    });

    it('should return an error when a string is inserted instead of a number entered', () => {
        assert.throws(() => matrixMult([[1,2,'a'],[1,2,4]]), TypeError);
    });

    it('should return an error when a string is passed', () => {
        assert.throws(() => matrixMult("abs"), TypeError);
    });

    it('should return [ [ 114, 160, 60, 27 ],[ 74, 97, 73, 14 ], [ 119, 157, 112, 23 ] ] when [[12,7,3],[4 ,5,6],[7 ,8,9]] and [[5,8,1,2], [6,7,3,0], [4,5,9,1]]  are passed', () => {
        assert.deepEqual(matrixMult([[12,7,3],[4 ,5,6],[7 ,8,9]],[[5,8,1,2], [6,7,3,0], [4,5,9,1]] ), [ [ 114, 160, 60, 27 ],[ 74, 97, 73, 14 ],  [ 119, 157, 112, 23 ] ]);
    });
});