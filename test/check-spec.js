const assert = require("assert"),
	check = require("../src/check");

describe("[Function: check]", () => {
	it("should be a function", () => {
		assert.strictEqual(typeof check, "function");
  });

	it('should return `true` when `armstrong` is called with 153', () => {
		assert.strictEqual(check('armstrong')(153), true);
});

	it('should return true when automorphic is called with 76', () => {
		assert.strictEqual(check('automorphic')(76), true);
});

	it('should return true when harshad is called with 3', () => {
		assert.strictEqual(check('harshad')(3), true);
	});

	it('should return true when stormer is called with 4', () => {
		assert.strictEqual(check('stormer')(4), true);
	});

	it('should return true when carmichael is called with 561', () => {
		assert.strictEqual(check('carmichael')(561), true);
	});

	it('should return true when deficient is called with 21', () => {
		assert.strictEqual(check('deficient')(21), true);
	});

	it('should return true when frugal is called with 125', () => {
		assert.strictEqual(check('frugal')(125), true);
	});

	it('should retrun true when kaprekar is called with 45', () => {
		assert.strictEqual(check('kaprekar')(45), true);
	});

	it('should return true when lucky is called with 3', () => {
		assert.strictEqual(check('lucky')(3), true);
	});

	it('should return true when neon is called with 9', () => {
		assert.strictEqual(check('neon')(9), true);
	});

	it('should return true when perfect is called with 6', () => {
		assert.strictEqual(check('perfect')(6), true);
	});

	it('should return true when smith is called with 4', () => {
		assert.strictEqual(check('smith')(4), true);
	});

	it('should return true when hoax is called with 22', () => {
		assert.strictEqual(check('hoax')(22), true);
	});

	it('should return true when palindrome is called with 121', () => {
		assert.strictEqual(check('palindrome')(121), true);
	});

	it("should return `true` when called `prime` with 2 as an argument", () => {
		assert.strictEqual(check('prime')(2), true);
  });
});
