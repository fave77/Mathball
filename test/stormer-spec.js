const assert = require('assert'),
        stormer = require('../src/stormer').check;

describe('[Function: stormer', () => {

    it("should be a function", () => {
		assert.strictEqual(typeof stormer, "function");
    });

    it("should throw an error when a string is passed", () => {
		assert.throws(() => stormer("31"), TypeError);
    });

    it("should throw an error when a boolean is passed", () => {
		assert.throws(() => stormer(true), TypeError);
    });

    it("should throw an error when a non-negative number is passed", () => {
		assert.throws(() => stormer(-31), TypeError);
    });

    it("should throw an error when no arguments passed", () => {
		assert.throws(() => stormer(), TypeError);
    });
    
    it("should return a boolean", () => {
		assert.strictEqual(typeof stormer(5), "boolean");
    });

    it("should return 'true' when '11' is passed", () => {
        assert.strictEqual(stormer(11), true);
      });

    it("should return 'true' when '1' is passed", () => {
    assert.strictEqual(stormer(1), true);
    });

    it("should return 'true' when '6' is passed", () => {
        assert.strictEqual(stormer(6), true);
    });

    it("should return 'false' when '7' is passed", () => {
    assert.strictEqual(stormer(7), false);
    });
});
