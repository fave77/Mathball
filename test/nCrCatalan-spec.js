const assert = require("assert"),
	nCrCatalan = require("../src/nCrCatalan").find;

describe("[Function: nCrCatalan]", () => {
	it("should be a function", () => {
		assert.strictEqual(typeof nCrCatalan, "function");
	});

	it("should return a number when a non-negative integer is passed", () => {
		assert.strictEqual(typeof nCrCatalan(1), "number");
	});

	it("should return '1' when '0' is passed", () => {
		assert.strictEqual(nCrCatalan(0), 1);
	});

	it("should return '4862' when '9' is passed", () => {
		assert.strictEqual(nCrCatalan(9), 4862);
	});

	it("should return '42' when '5' is passed", () => {
		assert.strictEqual(nCrCatalan(5), 42);
	});

	it("should return '429' when '7' is passed", () => {
		assert.strictEqual(nCrCatalan(7), 429);
	});

	it("should throw an error when a negative number is passed", () => {
		assert.throws(() => nCrCatalan(-20), TypeError);
	});

	it("should throw an error when a floating point is passed", () => {
		assert.throws(() => nCrCatalan(27.227), TypeError);
	});

	it("should throw an error when a string is passed", () => {
		assert.throws(() => nCrCatalan("41"), TypeError);
	});

	it("should throw an error when a boolean is passed", () => {
		assert.throws(() => nCrCatalan(true), TypeError);
	});

	it("should throw an error when an array is passed", () => {
		assert.throws(() => nCrCatalan([1, 2]), TypeError);
	});

	it("should throw an error when no arguments passed", () => {
		assert.throws(() => nCrCatalan(), TypeError);
	});
});
