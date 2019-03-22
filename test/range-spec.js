const assert = require('assert'),
	range = require('../src/range');


describe('[Function: range]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof range, 'function');
	});

	it('should return `[0, 1, 1]` when fibonacci is passed as arg & 1 is passed as arg to fibonacci', () => {
		assert.deepEqual(range('fibonacci')(1), [0, 1, 1]);
	});

	it('should return `[0, 1, 1, 2]` when fibonacci is passed as arg & 2 is passed as arg to fibonacci', () => {
		assert.deepEqual(range('fibonacci')(2), [0, 1, 1, 2]);
    });
    
	it('should throw an error when no arguments passed', () => {
			assert.throws(() => range(), TypeError);
	});

	it("should throw an error when 'sum' is passed as arg", () => {
		assert.throws(() => range('sum')(1), TypeError);
	});

	it('should throw an error when a number is passed', () => {
			assert.throws(() => range(31), TypeError);
	});

	it('should throw an error when a negative number is passed', () => {
			assert.throws(() => range(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
			assert.throws(() => range(31.101996), TypeError);
	});

});
