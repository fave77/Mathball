const assert = require("assert"),
	check = require("../src/check");

describe("[Function: check]", () => {
	it("should be a function", () => {
		assert.strictEqual(typeof check, "function");
  });

	it("should return `true` when called `prime` with 2 as an argument", () => {
		assert.strictEqual(check('prime')(2), true);
  });

	it("should throw an error when calling 'sum'", () => {
		assert.throws(() => check('sum')([2,2]), TypeError);
	});

});
