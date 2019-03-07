const assert = require('assert'),
        pow = require("../src/pow");

describe('[Function: pow]', () => {

        it('should be a function', () => {
            assert.strictEqual(typeof pow, 'function');
        });

        it('should return a number when two numbers are passed', () => {
            assert.strictEqual(typeof pow(11, 1), 'number');
        });

        it('should return a number when three numbers are passed', () => {
            assert.strictEqual(typeof pow(11, 1, 2), 'number');
        });

        it('should return \'1\' when \'6, 3, 5\' is passed', () => {
            assert.strictEqual(pow(6, 3, 5), 1);
        });

        it('should return \'1\' when \'8, 4, 5\' is passed', () => {
            assert.strictEqual(pow(8, 4, 5), 1);
        });

        it('should return \'125\' when \'5, 3\' is passed', () => {
            assert.strictEqual(pow(5, 3), 125);
        });

        it('should throw an error when a negative number is passed as modulo', () => {
            assert.throws(() => pow(20, 5, -9), TypeError);
        });

        it('should throw an error when a negative number is passed', () => {
            assert.throws(() => pow(-20), TypeError);
        });

        it('should throw an error when a floating point is passed', () => {
            assert.throws(() => pow(31.101996), TypeError);
        });

        it('should throw an error when a string is passed', () => {
            assert.throws(() => pow('31'), TypeError);
        });

        it('should throw an error when no arguments passed', () => {
            assert.throws(() => pow(), TypeError);
        });

    });