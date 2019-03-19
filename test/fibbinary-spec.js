const assert = require('assert'),
    fibbinary = require('../src/fibbinary').check;

describe('[Function: fibbinary]', () => {
    it('should be a function', () => {
        assert.strictEqual(typeof fibbinary, 'function');
    });

    it('should return a boolean only', () => {
        assert.strictEqual(typeof fibbinary(100), 'boolean');
    });

    it('should return a boolean only', () => {
        assert.strictEqual(typeof fibbinary(31), 'boolean');
    });

    it('should return a \'true\' when 10 is passed as an argument', () => {
        assert.strictEqual(fibbinary(10), true);
    });

    it('should return a \'false\' when 63 is passed as an argument', () => {
        assert.strictEqual(fibbinary(63), false);
    });

    it('should throw an error when no arguments passed', () => {
		assert.throws(() => fibbinary(), TypeError);
    });
    
    it('should throw an error when a negative number is passed', () => {
		assert.throws(() => fibbinary(-20), TypeError);
    });
    
    it('should throw an error when a string is passed', () => {
        assert.throws(() => fibbinary('asd'), TypeError);
    });

    it('should throw an error when a floating point number is passed', () => {
        assert.throws(() => fibbinary(1.265436), TypeError);
    });
});