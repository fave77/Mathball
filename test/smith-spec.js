const assert = require("assert"),
	isSmith = require("../src/smith").isSmith;

describe("[Function: isSmith]", () => {
	it("should be a function", () => {
		assert.strictEqual(typeof isSmith, "function");
	});

	it("should return a boolean value when a positive integer is passed", () => {
		assert.strictEqual(typeof isSmith(1), "boolean");
	});

	it("should return 'true' when '483' is passed", () => {
		assert.strictEqual(isSmith(483), true);
	});

	it("should return 'false' when '34' is passed", () => {
		assert.strictEqual(isSmith(34), false);
	});

	it("should throw an error when a negative number is passed", () => {
		assert.throws(() => isSmith(-20), TypeError);
	});

	it("should throw an error when a floating point is passed", () => {
		assert.throws(() => isSmith(31.101996), TypeError);
	});

	it("should throw an error when a string is passed", () => {
		assert.throws(() => isSmith("31"), TypeError);
	});

	it("should throw an error when no arguments passed", () => {
		assert.throws(() => isSmith(), TypeError);
	});
});
