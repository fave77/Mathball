const assert = require('assert'),
	lcm = require('../src/lcm');

describe('[Function: lcm]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof lcm, 'function');
	});

	it('should return a number when an array of number is passed', () => {
		assert.strictEqual(typeof lcm([1, 1]), 'number');
	});

	it('should return \'30\' when \'[2, 3, 5, 15]\' is passed', () => {
		assert.strictEqual(lcm([2, 3, 5, 15]), 30);
	});

	it('should return \'70\' when \'[-5, 7, 10, 5]\' is passed', () => {
		assert.strictEqual(lcm([-5, 7, 10, 5]), 70);
	});

});
