const assert = require('assert'),
	pipe = require('../src/pipe');

describe('[Function: pipe]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof pipe, 'function');
	});

	it('should return an \'object\' when 42 is passed without done()', () => {
		assert.strictEqual(typeof pipe(42), 'object');
	});

	it('should return 42 when 42 is passed and done() gets called', () => {
		assert.strictEqual(pipe(42).done(), 42)
	});

	it('should return 50 when 42 is passed and add(8), done() gets called', () => {
		assert.strictEqual(pipe(42).add(8).done(), 50)
	});

	it('should return 40 when 42 is passed and sub(2), done() gets called', () => {
		assert.strictEqual(pipe(42).sub(2).done(), 40)
	});

	it('should return 84 when 42 is passed and mul(2), done() gets called', () => {
		assert.strictEqual(pipe(42).mul(2).done(), 84)
	});

	it('should return 21 when 42 is passed and div(2), done() gets called', () => {
		assert.strictEqual(pipe(42).div(2).done(), 21)
	});

	it('should return 42 when -42 is passed and abs(), done() gets called', () => {
		assert.strictEqual(pipe(-42).abs().done(), 42)
	});

	it('should return 42 when [8, 23, 2, 9] is passed and abs(), done() gets called', () => {
		assert.strictEqual(pipe([8, 23, 2, 9]).sum().done(), 42)
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => pipe(), TypeError);
	});

});
