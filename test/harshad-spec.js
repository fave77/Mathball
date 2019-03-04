const assert = require("assert"),
	isHarshad = require("../src/harshad").isHarshad;

describe("[Function:isHarshad]", () => {
	it("should be a function", () => {
		assert.strictEqual(typeof isHarshad, "function");
	});

	it("should return a boolean value when a positive integer is passed", () => {
		assert.strictEqual(typeof isHarshad(1), "boolean");
	});

	it("should return 'true' when '18' is passed", () => {
		assert.strictEqual(isHarshad(18), true);
	});

	it("should return 'false' when '15' is passed", () => {
		assert.strictEqual(isHarshad(15), false);
	});

	it("should throw an error when a negative number is passed", () => {
		assert.throws(() => isHarshad(-10), TypeError);
	});

	it("should throw an error when a floating point is passed", () => {
		assert.throws(() => isHarshad(22.2446), TypeError);
	});

	it("should throw an error when a string is passed", () => {
		assert.throws(() => isHarshad("76"), TypeError);
	});

	it("should throw an error when no arguments passed", () => {
		assert.throws(() => isHarshad(), TypeError);
	});
});
