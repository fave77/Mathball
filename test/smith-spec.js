const assert = require("assert"),
	smith = require("../src/smith").check;

describe("[Function: smith]", () => {
	it("should be a function", () => {
		assert.strictEqual(typeof smith, "function");
	});

	it("should return a boolean value when a positive integer is passed", () => {
		assert.strictEqual(typeof smith(1), "boolean");
	});

	it("should return 'true' when '483' is passed", () => {
		assert.strictEqual(smith(483), true);
	});

	it("should return 'false' when '34' is passed", () => {
		assert.strictEqual(smith(34), false);
	});

	it("should throw an error when a negative number is passed", () => {
		assert.throws(() => smith(-20), TypeError);
	});

	it("should throw an error when a floating point is passed", () => {
		assert.throws(() => smith(31.101996), TypeError);
	});

	it("should throw an error when a string is passed", () => {
		assert.throws(() => smith("31"), TypeError);
	});

	it("should throw an error when no arguments passed", () => {
		assert.throws(() => smith(), TypeError);
	});
});
