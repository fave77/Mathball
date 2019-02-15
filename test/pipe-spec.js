const assert = require('assert'),
	pipe = require('../src/pipe');

describe('[Function: pipe]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof pipe, 'function');
	});

	it('should return a function when series of functions are passed', () => {
		assert.strictEqual(typeof pipe(_ => {}, _ => {}), 'function');
	});

	it('should return \'2\' when \'(Math.sqrt, Math.sqrt)\' is passed and the returned value gets called with argument \'16\'', () => {
		assert.strictEqual(pipe(Math.sqrt, Math.sqrt)(16), 2);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => pipe(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => pipe(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => pipe('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => pipe(), TypeError);
	});

});
