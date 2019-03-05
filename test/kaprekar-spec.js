const assert = require("assert"),
	isKaprekar = require("../src/kaprekar").isKaprekar;

describe("[Function: isKaprekar]", () => {
	it("should be a function", () => {
		assert.strictEqual(typeof isKaprekar, "function");
	});

	it("should return a boolean value when a positive integer is passed", () => {
		assert.strictEqual(typeof isKaprekar(1), "boolean");
	});

	it("should return 'true' when '9' is passed", () => {
		assert.strictEqual(isKaprekar(9), true);
	});

	it("should return 'false' when '44' is passed", () => {
		assert.strictEqual(isKaprekar(44), false);
	});

	it("should throw an error when a negative number is passed", () => {
		assert.throws(() => isKaprekar(-20), TypeError);
	});

	it("should throw an error when a floating point is passed", () => {
		assert.throws(() => isKaprekar(31.101996), TypeError);
	});

	it("should throw an error when a string is passed", () => {
		assert.throws(() => isKaprekar("31"), TypeError);
	});

	it("should throw an error when no arguments passed", () => {
		assert.throws(() => isKaprekar(), TypeError);
	});

	it("should 'continue' loop execution instead of throwing error", () => {
		assert.doesNotThrow(() => isKaprekar(10), Error);
	});
});
