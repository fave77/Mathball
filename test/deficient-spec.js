const assert = require('assert'),
        isDeficient = require('../src/deficient').isDeficient;

describe('[Function: isDeficient]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof isDeficient, 'function');
	});

	it('should return \'true\' when \'21\' is passed', () => {
		assert.strictEqual(isDeficient(21), true);
    });
    

	it('should return \'true\' when \'17\' is passed', () => {
		assert.strictEqual(isDeficient(17), true);
	});

	it('should return \'false\' when \'12\' is passed', () => {
		assert.strictEqual(isDeficient(12), false);
	});

	it('should throw an error when a negative number is passed', () => {
		assert.throws(() => isDeficient(-20), TypeError);
	});

	it('should throw an error when a floating point is passed', () => {
		assert.throws(() => isDeficient(31.101996), TypeError);
	});

	it('should throw an error when a string is passed', () => {
		assert.throws(() => isDeficient('31'), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => isDeficient(), TypeError);
	});

});
