const assert = require("assert"),
	smart = require("../src/smart").find;

describe("[Function: smart]", () => {
	it("should be a function", () => {
		assert.strictEqual(typeof smart, "function");
	});

	it("should return an integer value when a positive integer is passed", () => {
		assert.strictEqual(typeof smart(1), "number");
	});

	it("should return '273' when '50' is passed", () => {
		assert.strictEqual(smart(50), 273);
	});

	it("should throw an error when a negative number is passed", () => {
		assert.throws(() => smart(-20), TypeError);
	});

	it("should throw an error when a floating point is passed", () => {
		assert.throws(() => smart(31.101996), TypeError);
	});

	it("should throw an error when a string is passed", () => {
		assert.throws(() => smart("31"), TypeError);
	});

	it("should throw an error when no arguments passed", () => {
		assert.throws(() => smart(), TypeError);
	});
});
