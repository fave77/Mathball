const assert = require("assert"),
    bell = require("../src/bell").bell;
    
describe("[Function: bell]", () => {
    it("should be a function", () => {
        assert.strictEqual(typeof bell, "function");
    });

    it("should throw an error when a negative number is passed", () => {
		assert.throws(() => bell(-37), TypeError);
    });
    
    it("should throw an error when a floating point is passed", () => {
		assert.throws(() => bell(3.141718), TypeError);
    });
    
    it("should throw an error when a string is passed", () => {
		assert.throws(() => bell("26"), TypeError);
    });
    
    it("should throw an error when a boolean is passed", () => {
		assert.throws(() => bell(true), TypeError);
    });
    
    it("should throw an error when an array is passed", () => {
		assert.throws(() => bell([3, 4]), TypeError);
	});

    it("should throw an error when no arguments passed", () => {
		assert.throws(() => bell(), TypeError);
    });
    
    it("should throw an error when an object arguments passed", () => {
		assert.throws(() => bell({1 : 2}), TypeError);
    });

    it("should return a number when a non-negative integer is passed", () => {
		assert.strictEqual(typeof bell(3), "number");
    });
    
    it("should return '1' when '0' is passed", () => {
		assert.strictEqual(bell(0), 1);
    });
    
    it("should return '1' when '1' is passed", () => {
		assert.strictEqual(bell(1), 1);
    });

    it("should return '52' when '5' is passed", () => {
		assert.strictEqual(bell(5), 52);
    });
});