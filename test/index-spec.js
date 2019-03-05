const assert = require('assert'),
	M = require('../src');

describe('[Object: mathball]', () => {
	it('should return an object', () => {
		assert.equal(typeof M, 'object');
	});
});
