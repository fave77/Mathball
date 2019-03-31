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

	it('should return 52 when bell is called with 5', () => {
		assert.strictEqual(find('bell')(5), 52);
	});

	it('should return 14 when catalan is called with 4', () => {
		assert.strictEqual(find('catalan')(4), 14);
	});

	it('should return 5 when fibonacci is called with 5', () => {
		assert.strictEqual(find('fibonacci')(5), 5);
	});

	it('should return 25 when magic is called with 2', () => {
		assert.strictEqual(find('magic')(2), 25);
	});

	it('should return 12 when padovan is called with 21', () => {
		assert.strictEqual(find('padovan')(12), 21);
	});

	it('should return 30 when smart is called with 1', () => {
		assert.strictEqual(find('smart')(1), 30);
	});

	it('should return 8 when triangular is called with 36', () => {
		assert.strictEqual(find('triangular')(8), 36);
	});

	it('should return 8 when catalan is called with 7', () => {
		assert.strictEqual(find('ugly')(7), 8);
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

    it('should throw an error if sum is called', () => {
        assert.throws(() => find('sum')([1,2,3,4]), TypeError);
    });
});
