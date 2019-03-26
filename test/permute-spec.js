const assert = require('assert'),
	permute = require('../src/permute');

describe("[Function: permute]", () => {
	it("should be a function", () => {
		assert.strictEqual(typeof permute, "function");
	});

	it("should return '4' when '4' is passed", () => {
		assert.deepEqual(permute('4'), ['4']);
    });

    it("should return 'a' when 'a' is passed", () => {
		assert.deepEqual(permute("a"), ["a"]);
	});

	it("should return '15' and '51' when '15' is passed", () => {
		assert.deepEqual(permute("15"), ["15","51"]);
    });

    it("should return 'ab' and 'ba' when 'ab' is passed", () => {
		assert.deepEqual(permute("ab"), ["ab","ba"]);
    });

    it("should return 'abc', 'acb', 'bac', 'bca', 'cab' and 'cba' when 'abc' is passed", () => {
		assert.deepEqual(permute("abc"), ["abc","acb","bac","bca","cab","cba"]);
    });

    it("should return '123', '132', '213', '231', '312' and '321' when '123' is passed", () => {
		assert.deepEqual(permute("123"), ["123","132","213","231","312","321"]);
    });

    it("should throw an error when a positive number is passed", () => {
		assert.throws(() => permute(123), TypeError);
	});

	it("should throw an error when a negative number is passed", () => {
		assert.throws(() => permute(-20), TypeError);
	});

	it("should throw an error when a floating point is passed", () => {
		assert.throws(() => permute(31.101996), TypeError);
	});

	it("should throw an error when no arguments passed", () => {
		assert.throws(() => permute(), TypeError);
	});
});
