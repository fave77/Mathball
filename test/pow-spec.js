const assert = require('assert'),
    pow = require('../src/pow');

describe('[Function: pow', () => {
    it('should be a function', () => {
        assert.strictEqual(typeof pow, 'function');
    });

    it('should return a number when three numbers are passed', () => {
        assert.strictEqual(typeof pow(1, 1, 1), 'number');
    });

    it('should throw an error when a negative number is passed', () => {
		assert.throws(() => pow(-20), TypeError);
    });
    
    it('should return \'25\' when \'5, 2\' is passed', () => {
        assert.strictEqual(pow(5, 2), 25);
    });

    it('should return \'5\' when \'5, 3, 6\' is passed', () => {
        assert.strictEqual(pow(5, 3, 6), 5);
    });

    it('should return \'0\' when \'5, 3, 1\' is passed', () => {
        assert.strictEqual(pow(5, 3, 1), 0);
    });

    it('should throw an error when no arguments passed', () => {
		assert.throws(() => pow(), TypeError);
    });
    
    it('should throw an error when one arguments is passed', () => {
		assert.throws(() => pow(5), TypeError);
	});
});