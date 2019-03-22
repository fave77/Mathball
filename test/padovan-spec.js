const assert = require("assert"),
	padovan = require("../src/padovan").find;

describe("[Function: padovan]", () => {
	it("should be a function", () => {
		assert.strictEqual(typeof padovan, "function");
	});

	it("should return a number when a positive integer is passed", () => {
		assert.strictEqual(typeof padovan(1), "number");
	});

	it("should return '4' when '6' is passed", () => {
		assert.strictEqual(padovan(6), 4);
	});

	it("should return '49' when '15' is passed", () => {
		assert.strictEqual(padovan(15), 49);
	});

	it("should throw an error when a negative number is passed", () => {
		assert.throws(() => padovan(-20), TypeError);
	});

	it("should throw an error when a floating point is passed", () => {
		assert.throws(() => padovan(31.101996), TypeError);
	});

	it("should throw an error when a string is passed", () => {
		assert.throws(() => padovan("31"), TypeError);
	});

	it("should throw an error when no arguments passed", () => {
		assert.throws(() => padovan(), TypeError);
	});
});
