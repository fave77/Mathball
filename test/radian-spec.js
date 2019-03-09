const assert = require('assert'),
        toRadians = require("../src/radian").toRadians;

describe("Function: toRadians", () => {

    it("should be a function", () => {
		assert.strictEqual(typeof toRadians, "function");
    });
    
    it("should throw an error when a string is passed", () => {
		assert.throws(() => toRadians("31"), TypeError);
    });
    
    it("should throw an error when a boolean is passed", () => {
		assert.throws(() => toRadians(true), TypeError);
    });
    
    it("should return a number", () => {
		assert.strictEqual(typeof toRadians(5), "number");
    });

    it("should return '3.141592653589793' when '180' is passed", () => {
		assert.strictEqual(toRadians(180), Math.PI);
    });
    
    it("should return '1.3089999999999997' when '75.00017538262475' is passed", () => {
      assert.strictEqual(toRadians(75.00017538262475), 1.3089999999999997);
    });
});
