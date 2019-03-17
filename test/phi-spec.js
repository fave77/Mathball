const assert = require('assert'),
phi = require('../src/totient').phi;

describe("[Function: phi]", () => {
	it("should be a function", () => {
		assert.strictEqual(typeof phi, "function");
    });
    
    it('should return a number when a number is passed', () => {
		assert.strictEqual(typeof phi(20), 'number');
    });

	it("should return '6' when '9' is passed", () => {
		assert.strictEqual(phi(9), 6);
	});

	it("should return '0' when '0' is passed", () => {
		assert.strictEqual(phi(0), 0);
    });
    
    it("should return '1' when '1' is passed", () => {
		assert.strictEqual(phi(1), 1);
    });

	it("should throw an error when a negative number is passed", () => {
		assert.throws(() => phi(-20), TypeError);
	});

	it("should throw an error when a floating point is passed", () => {
		assert.throws(() => phi(31.101996), TypeError);
	});

	it("should throw an error when a string is passed", () => {
		assert.throws(() => phi("31"), TypeError);
    });
    
    it('should throw an error when a boolean is passed', () => {
		assert.throws(() => phi(true), TypeError);
	});

	it("should throw an error when no arguments passed", () => {
		assert.throws(() => phi(), TypeError);
	});
});
