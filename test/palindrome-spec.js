const assert = require('assert'),
	isPalindrome = require('../src/palindrome').isPalindrome,
	rangePal = require('../src/palindrome').rangePal;

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

describe('[Function: rangePal]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof rangePal, 'function');
	});

	it('should return a object when a non-negative integers are passed', () => {
		assert.strictEqual(typeof rangePal(1,5), 'object');
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => rangePal(-20), TypeError);
	});

	it('should throw an error when a lower limit is larger than upper limit', () => {
		assert.throws(() => rangePal(25,20), TypeError);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => rangePal(15,-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => rangePal(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => rangePal('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => rangePal(), TypeError);
	});

	it('should throw an error when one argument is passed', () => {
		assert.throws(() => rangePal(5), TypeError);
	});

	it('should return \'[0,1,2,3,4,5,6,7,8,9,11]\' when \'0, 18\' are passed', () => {
		assert.deepEqual(rangePal(0,18), [0,1,2,3,4,5,6,7,8,9,11]);
	});

});