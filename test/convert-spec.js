const assert = require('assert'),
    M = require('../src/convert');
    
describe("Function: convert", () => {

    it("should be a function", () => {
        assert.strictEqual(typeof M.convert, "function");
    });

    it("should throw an error when a string is passed", () => {
		assert.throws(() => M.convert("31", {from: 'degree', to: 'radian'}), TypeError);
    });
    
    it("should throw an error when a boolean is passed", () => {
		assert.throws(() => M.convert(true, {from: 'degree', to: 'radian'}), TypeError);
    });

    it("should throw an error when a string is passed", () => {
		assert.throws(() => M.convert("31", {from: 'radian', to: 'degree'}), TypeError);
    });
    
    it("should throw an error when a boolean is passed", () => {
		assert.throws(() => M.convert(true, {from: 'radian', to: 'degree'}), TypeError);
    });

    it("should throw an error when a to/from is(are) absent", () => {
		assert.throws(() => M.convert(true, {from: 'radian', an: 'degree'}), ReferenceError);
    });

    it("should throw an error when a to/from is(are) absent", () => {
		assert.throws(() => M.convert(true, {fom: 'radian', an: 'degree'}), ReferenceError);
    });

    it("should throw an error when a to/from is(are) absent", () => {
		assert.throws(() => M.convert(true, {a: 'radian', an: 'degree'}), ReferenceError);
    });

    it("should throw an error when value of trim is not a number", () => {
		assert.throws(() => M.convert(true, {from: 'radian', to: 'degree'}, 'a'), TypeError);
    });

    it("should return a message when any convertion type not available is passed", () => {
		assert.strictEqual(M.convert(5, {from: 'degree', to: 'degree'}), "Your to/from parameter was not found!");
    });

    it("should return a number", () => {
		assert.strictEqual(typeof M.convert(5, {from: 'degree', to: 'radian'}), "number");
    });

    it("should return a number", () => {
		assert.strictEqual(typeof M.convert(5, {from: 'radian', to: 'degree'}), "number");
    });

    it("should return '3.141592653589793' when '180' is passed", () => {
		assert.strictEqual(M.convert(180, {from: 'degree', to: 'radian'}), Math.PI);
    });

    it("should return '3.141592653589793' when '180' is passed and trim = 0", () => {
		assert.strictEqual(M.convert(180, {from: 'degree', to: 'radian'}, 0), Math.PI);
    });

    it("should return '3.14159265' when '180' is passed and trim = 8", () => {
		assert.strictEqual(M.convert(180, {from: 'degree', to: 'radian'}, 8), 3.14159265);
    });

    it("should return '75.00017538262475' when '1.309' is passed", () => {
        assert.strictEqual(M.convert(1.309, {from: 'radian', to: 'degree'}), 75.00017538262475);
    });

    it("should return '75.00017538262475' when '1.309' is passed with trim = 0", () => {
        assert.strictEqual(M.convert(1.309, {from: 'radian', to: 'degree'}, 0), 75.00017538262475);
    });

    it("should return '75.000175' when '1.309' is passed and trim = 6", () => {
        assert.strictEqual(M.convert(1.309, {from: 'radian', to: 'degree'}, 6), 75.000175);
    });

});