const assert = require("assert"),
	catalan = require("../src/catalan").catalan;

describe("[Function: catalan]", () => {
	it("should be a function", () => {
		assert.strictEqual(typeof catalan, "function");
	});

	it("should return a number when a positive integer is passed", () => {
		assert.strictEqual(typeof catalan(1), "number");
	});

	it("should return '1' when '0' is passed", () => {
		assert.strictEqual(catalan(0), 1);
	});

	it("should return '4862' when '9' is passed", () => {
		assert.strictEqual(catalan(9), 4862);
	});

	it("should return '42' when '5' is passed", () => {
		assert.strictEqual(catalan(5), 42);
	});

	it("should throw an error when a negative number is passed", () => {
		assert.throws(() => catalan(-20), TypeError);
	});

	it("should throw an error when a floating point is passed", () => {
		assert.throws(() => catalan(31.101996), TypeError);
	});

	it("should throw an error when a string is passed", () => {
		assert.throws(() => catalan("31"), TypeError);
	});

	it("should throw an error when no arguments passed", () => {
		assert.throws(() => catalan(), TypeError);
	});
});
