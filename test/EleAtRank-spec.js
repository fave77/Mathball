const assert = require('assert'),
        EleAtRank = require('../src/EleAtRank').EleAtRank;

describe("[Function :EleAtRank]", () => {
    it('should be a function', () => {
        assert.strictEqual(typeof EleAtRank, 'function');
    });

    it('should return -1 if an rank passed is greater than the size of the array', () => {
        assert.strictEqual(EleAtRank([1,2], 3), -1);
    });

    it('should return an error if an non-array object is passed', () => {
        assert.strictEqual(EleAtRank("shubha"), "Argument must be an array");
    });

    it('should return an error if an non-array object is passed', () => {
        assert.strictEqual(EleAtRank(45), "Argument must be an array");
    });
    
    it('should accept only a positive integer for rank', () => {
        assert.throws( () => EleAtRank([1,2], -1), TypeError);
    });

    it('should accept only a positive integer for rank', () => {
        assert.throws( () => EleAtRank([1,2], "-1"), TypeError);
    });

    it('should accept only a positive integer for rank', () => {
        assert.throws( () => EleAtRank([1,2], {1:1}), TypeError);
    });

    it('should return an integer', () => {
        assert.strictEqual(typeof EleAtRank([1, 5, 3], 1), 'number');
    });
    
    it('should return "5" when [1, 5, 3, 8, 1, 3, 3] and 2 are passed', () => {
        assert.strictEqual(EleAtRank([1, 5, 3, 8, 1, 3, 3], 2), 5);
    });

    it('should return "3" when [1, 5, 3, 8, 1, 3, 3] and 5 are passed', () => {
        assert.strictEqual(EleAtRank([1, 5, 3, 8, 1, 3, 3], 5), 3);
    });

    it('should return "8" when [1, 5, 3, 8, 1, 3, 3] and 1 are passed', () => {
        assert.strictEqual(EleAtRank([1, 5, 3, 8, 1, 3, 3], 1), 8);
    });
});