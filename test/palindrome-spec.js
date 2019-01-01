const assert = require('assert'),
	isPalindrome = require('../src/palindrome').isPalindrome;

describe('[Function: isPalindrome]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof isPalindrome, 'function');
	});

	it('should return a boolean value when a non-negative integer is passed', () => {
		assert.strictEqual(typeof isPalindrome(1), 'boolean');
	});

	it('should return \'true\' when \'141\' is passed', () => {
		assert.strictEqual(isPalindrome(141), true);
	});

	it('should return \'false\' when \'726\' is passed', () => {
		assert.strictEqual(isPalindrome(726), false);
	});

});
