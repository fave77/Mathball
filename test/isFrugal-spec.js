const assert = require('assert');
const isFrugal = require('../src/frugalNumber').isFrugal;

describe('[Function: isFrugal]', () => {

    it('should be a function', () => {
        assert.strictEqual(typeof isFrugal, 'function');
    });

    it('should return a boolean value when a positive integer is passed', () => {
        assert.strictEqual(typeof isFrugal(1), 'boolean');
    });

    it('should return \'true\' when \'125\' is passed', () => {
        assert.strictEqual(isFrugal(125), true);
    });

    it('should return \'true\' when \'243\' is passed', () => {
        assert.strictEqual(isFrugal(243), true);
    });

    it('should return \'false\' when \'34\' is passed', () => {
        assert.strictEqual(isFrugal(34), false);
    });

    it('should throw an error when a negative number is passed', () => {
        assert.throws(() => isFrugal(-20), TypeError);
    });

    it('should throw an error when a floating point is passed', () => {
        assert.throws(() => isFrugal(31.101996), TypeError);
    });

    it('should throw an error when a string is passed', () => {
        assert.throws(() => isFrugal('31'), TypeError);
    });

    it('should throw an error when no arguments passed', () => {
        assert.throws(() => isFrugal(), TypeError);
    });

});
