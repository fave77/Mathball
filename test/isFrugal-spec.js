const assert = require('assert'),
        isFrugal = require('../src/isFrugal').isFrugal;

describe('[Function: isFrugal]', () => {

    it('should be a function', () => {
        assert.strictEqual(typeof isFrugal, 'function');
    });

    it('should return a boolean value when a positive integer is passed', () => {
        assert.strictEqual(typeof isFrugal(2), 'boolean');
    });

    it('should throw an error when a negative number is passed', () => {
		assert.throws(() => isFrugal(-20), TypeError);
    });
    
    it('should throw an error when a floating point number is passed', () => {
		assert.throws(() => isFrugal(20.51513), TypeError);
    });
    
    it('should throw an error when a string is passed', () => {
		assert.throws(() => isFrugal('20'), TypeError);
    });
    
    it('should throw an error when no argument is passed', () => {
		assert.throws(() => isFrugal(), TypeError);
    });
    
    it('should return \'true\' when \'256\' is passed ', () => {
        assert.strictEqual(isFrugal(256), true);
    });

    it('should return \'true\' when \'343\' is passed ', () => {
        assert.strictEqual(isFrugal(343), true);
    });

    it('should return \'false\' when \'100\' is passed ', () => {
        assert.strictEqual(isFrugal(100), false);
    });

    it('should return \'false\' when \'129\' is passed ', () => {
        assert.strictEqual(isFrugal(129), false);
    });
});        