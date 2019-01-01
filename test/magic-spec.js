const assert = require('assert'),
	magic = require('../src/magic').magic;

describe('[Function: magic]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof magic, 'function');
	});

	it('should return a number when a positive integer is passed', () => {
		assert.strictEqual(typeof magic(1), 'number');
	});

	it('should return \'125\' when \'4\' is passed', () => {
		assert.strictEqual(magic(4), 125);
	});

	it('should return \'750\' when \'12\' is passed', () => {
		assert.strictEqual(magic(12), 750);
	});

});
