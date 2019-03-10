const assert = require('assert'),
	isPalindrome = require('../src/palindrome').isPalindrome,
	rangePalindrome = require('../src/palindrome').rangePalindrome;

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

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => isPalindrome(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => isPalindrome(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => isPalindrome('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => isPalindrome(), TypeError);
	});

});

describe('[Function: rangePalindrome]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof rangePalindrome, 'function');
	});

	it('should return a object when a non-negative integers are passed', () => {
		assert.strictEqual(typeof rangePalindrome(1,5), 'object');
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => rangePalindrome(-20), TypeError);
	});

	it('should throw an error when a lower limit is larger than upper limit', () => {
		assert.throws(() => rangePalindrome(25,20), TypeError);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => rangePalindrome(15,-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => rangePalindrome(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => rangePalindrome('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => rangePalindrome(), TypeError);
	});

	it('should throw an error when one argument is passed', () => {
		assert.throws(() => rangePalindrome(5), TypeError);
	});

	it('should return \'[0,1,2,3,4,5,6,7,8,9,11]\' when \'0, 18\' are passed', () => {
		assert.deepEqual(rangePalindrome(0,18), [0,1,2,3,4,5,6,7,8,9,11]);
	});

});