const assert = require('assert'),
        frugal = require('../src/frugal').check;

describe('[Function: frugal]', () => {

    it('should be a function', () => {
        assert.strictEqual(typeof frugal, 'function');
    });

    it('should return a boolean value when a positive integer is passed', () => {
        assert.strictEqual(typeof frugal(2), 'boolean');
    });

    it('should throw an error when a negative number is passed', () => {
		assert.throws(() => frugal(-20), TypeError);
    });
    
    it('should throw an error when a floating point number is passed', () => {
		assert.throws(() => frugal(20.51513), TypeError);
    });
    
    it('should throw an error when a string is passed', () => {
		assert.throws(() => frugal('20'), TypeError);
    });
    
    it('should throw an error when no argument is passed', () => {
		assert.throws(() => frugal(), TypeError);
    });
    
    it('should return \'true\' when \'256\' is passed ', () => {
        assert.strictEqual(frugal(256), true);
    });

    it('should return \'true\' when \'343\' is passed ', () => {
        assert.strictEqual(frugal(343), true);
    });

    it('should return \'false\' when \'100\' is passed ', () => {
        assert.strictEqual(frugal(100), false);
    });

    it('should return \'false\' when \'129\' is passed ', () => {
        assert.strictEqual(frugal(129), false);
    });
});
