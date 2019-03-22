const assert = require("assert"),
	isLucky = require("../src/lucky").check;

describe("[Function: isLucky]", () => {
	it("should be a function", () => {
		assert.strictEqual(typeof isLucky, "function");
	});

	it("should return a boolean value when a positive integer is passed", () => {
		assert.strictEqual(typeof isLucky(1), "boolean");
	});

	it("should return 'true' when '13' is passed", () => {
		assert.strictEqual(isLucky(13), true);
	});

	it("should return 'false' when '2' is passed", () => {
		assert.strictEqual(isLucky(2), false);
	});

	it("should throw an error when a negative number is passed", () => {
		assert.throws(() => isLucky(-20), TypeError);
	});

	it("should throw an error when a floating point is passed", () => {
		assert.throws(() => isLucky(31.101996), TypeError);
	});

	it("should throw an error when a string is passed", () => {
		assert.throws(() => isLucky("31"), TypeError);
	});

	it("should throw an error when no arguments passed", () => {
		assert.throws(() => isLucky(), TypeError);
	});
});
