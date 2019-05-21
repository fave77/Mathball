const assert = require('assert'),
        union = require('../src/union');

describe('[Function: union]', () => {
    
    it('should be a function', () => {
		assert.strictEqual(typeof union, 'function');
    });
    
    it('should throw an error when a non-array argument is passed', () => {
		assert.throws(() => union('ssad', [1,2,34]), TypeError);
	});

    it('should throw an error when a non-array argument is passed', () => {
		assert.throws(() => union([1,2,34], 'ssad'), TypeError);
    });   

    it('should return "[1, 2, 3, 4]" when "[1, 2, 3]" and "[2, 3, 4]" are passed', () => {
		assert.deepEqual(union([2, 3, 4], [1, 2, 3]), [1, 2, 3, 4]);
    });

    it('should return "[1, 45, -10]" when "[1, 2, 3, 4]" and "[-10, 1, 2, 3, 4, 45]" are passed', () => {
		assert.deepEqual(union([1, 45, -10], [1, 2, 3, 4]), [-10, 1, 2, 3, 4, 45]);
    });

    it('should return "[1, 2, 3, 4]" when "[1, 45, -10]" and "[-10, 1, 2, 3, 4, 45]" are passed', () => {
        assert.deepEqual(union([1, 2, 3, 4], [1, 45, -10]), [-10, 1, 2, 3, 4, 45]);
    });

    it('should return "[1]" when "[1, 45, -10]" and "[-10, 1, 45]" are passed', () => {
        assert.deepEqual(union([1, 45, -10], [1]), [-10, 1, 45]);
    });
});