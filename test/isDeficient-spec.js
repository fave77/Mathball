const assert = require('assert'),
	deficient = require('../src/deficient').check;

describe('[Function: deficient]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof deficient, 'function');
	});

	it('should throw TypeError when a negative number is passed as argument', () => {
		assert.throws(() => deficient(-10), TypeError);
	});

	it('should throw TypeError when a string is passed as argument', () => {
		assert.throws(() => deficient('hello world'), TypeError);
	});

	it('should throw TypeError when an array is passed as argument', () => {
		assert.throws(() => deficient(['foo', 'bar', 1, 3]), TypeError);
	});

	it('should throw TypeError when an object is passed as argument', () => {
		assert.throws(() => deficient({ foo: 'bar' }), TypeError);
	});

	it('should throw TypeError when a function is passed as argument', () => {
		assert.throws(() => deficient(deficient), TypeError);
  });

	it('should return true when 10 is passed as an argument', () => {
		assert.strictEqual(deficient(10), true);
	});

	it('should return false when 6 is passed as an argument', () => {
		assert.strictEqual(deficient(6), false);
	});

	it('should return true when 1 is passed as an argument', () => {
		assert.strictEqual(deficient(1), true);     // as always, 1 is a special case
	});
});
