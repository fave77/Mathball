const assert = require('assert');
const isDeficient = require('../src/isDeficient');

describe('[Function: isDeficient]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof isDeficient, 'function');
	});

	it('should throw TypeError when a negative number is passed as argument', () => {
		assert.throws(() => isDeficient(-10), TypeError);
	});

	it('should throw TypeError when a string is passed as argument', () => {
		assert.throws(() => isDeficient('hello world'), TypeError);
	});

	it('should throw TypeError when an array is passed as argument', () => {
		assert.throws(() => isDeficient(['foo', 'bar', 1, 3]), TypeError);
	});

	it('should throw TypeError when an object is passed as argument', () => {
		assert.throws(() => isDeficient({ foo: 'bar' }), TypeError);
	});

	it('should throw TypeError when a function is passed as argument', () => {
		assert.throws(() => isDeficient(isDeficient), TypeError);
  });

	it('should return true when 10 is passed as an argument', () => {
		assert.strictEqual(isDeficient(10), true);
	});

	it('should return false when 6 is passed as an argument', () => {
		assert.strictEqual(isDeficient(6), false);
	});

	it('should return true when 1 is passed as an argument', () => {
		assert.strictEqual(isDeficient(1), true);     // as always, 1 is a special case
	});
});
