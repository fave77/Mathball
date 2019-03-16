const assert = require('assert'),
      find = require('../src/find');

describe('[Function: find]', () => {
	it('should be a function', () => {
		assert.strictEqual(typeof find, 'function');
	});

	it('should return 120 when factorial is passed as arg & 5 is passed as arg for factorial', () => {
		assert.strictEqual(find('factorial')(5), 120);
	});

	it('should return 1 when factorial is passed as arg & 1 is passed as arg for factorial', () => {
		assert.strictEqual(find('factorial')(0), 1);
	});

	it('should return 1 when factorial is passed as arg & 1 is passed as arg for factorial', () => {
		assert.strictEqual(find('factorial')(1), 1);
    });
    
    it('should throw an error when an integer is passed as arg', () => {
		assert.throws(() => find(7)(12), TypeError);
    });

    it('should throw an error when a floating-point number is passed as arg', () => {
		assert.throws(() => find(25.7)(5), TypeError);
    });

	it('should throw an error when when factorial is passed as arg & negative number is passed as arg for factorial', () => {
		assert.throws(() => find('factorial')(-20), TypeError);
	});

	it('should throw an error when when factorial is passed as arg & floating-point number is passed as arg for factorial', () => {
		assert.throws(() => find('factorial')(31.101996), TypeError);
	});

	it('should throw an error when when factorial is passed as arg & string is passed as arg for factorial', () => {
		assert.throws(() => find('factorial')('31'), TypeError);
    });
    
    it('should throw an error when no arguments passed', () => {
		assert.throws(() => find()(), TypeError);
	});

	it('should throw an error when no arguments passed', () => {
		assert.throws(() => find('factorial')(), TypeError);
	});
});
