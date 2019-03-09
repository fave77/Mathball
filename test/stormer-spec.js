const assert = require('assert'),
        isStormer = require('../src/isStormer').isStormer;

describe('[Function: isStormer', () => {

    it("should be a function", () => {
		assert.strictEqual(typeof isStormer, "function");
    });

    it("should throw an error when a string is passed", () => {
		assert.throws(() => isStormer("31"), TypeError);
    });

    it("should throw an error when a boolean is passed", () => {
		assert.throws(() => isStormer(true), TypeError);
    });

    it("should throw an error when a non-negative number is passed", () => {
		assert.throws(() => isStormer(-31), TypeError);
    });

    it("should return a boolean", () => {
		assert.strictEqual(typeof isStormer(5), "boolean");
    });

    it("should return 'true' when '11' is passed", () => {
        assert.strictEqual(isStormer(11), true);
      });

      it("should return 'false' when '7' is passed", () => {
        assert.strictEqual(isStormer(7), false);
      });
});      