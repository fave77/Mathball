const assert = require('assert'),
        toDegrees = require("../src/degree").toDegrees;

describe("Function: toDegrees", () => {

    it("should be a function", () => {
		assert.strictEqual(typeof toDegrees, "function");
    });
    
    it("should throw an error when a string is passed", () => {
		assert.throws(() => toDegrees("31"), TypeError);
    });
    
    it("should throw an error when a boolean is passed", () => {
		assert.throws(() => toDegrees(true), TypeError);
    });
    
    it("should return a number", () => {
		assert.strictEqual(typeof toDegrees(5), "number");
    });

    it("should return '180' when '3.141592653589793' is passed", () => {
		assert.strictEqual(toDegrees(Math.PI), 180);
    });
    
    it("should return '75.00017538262475' when '1.309' is passed", () => {
      assert.strictEqual(toDegrees(1.309), 75.00017538262475);
    });
});