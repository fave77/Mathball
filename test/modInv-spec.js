const assert = require('assert'),
modInv = require('../src/modInv').modInv;

describe('[Function: modInv]', () => {
	it('should be a function', () => {
	assert.strictEqual(typeof modInv, 'function');
	});
	it('should return 4 when 3 and 11 is passed', () => {
	assert.strictEqual(modInv(3,11), 4);
	});
	it('should return 0 when numbers passed are not relatively prime like 6 and 9',() => {
	assert.strictEqual(modInv(6,9), 0);
	});
	it('should return 12 when 10 and 17 is passed', () => {
	assert.strictEqual(modInv(10,17), 12);
	});
	it('should throw an error when negative number(s) is passed', () => {
	assert.throws(() => modInv(-20,10), TypeError);
	});
	it('should throw an error when a floating point is passed', () => {
	assert.throws(() => modInv(2.4, 3.5) , TypeError);
	});
	it('should throw an error when a string is passed', () => {
	assert.throws(() => modInv('10','17'), TypeError);
	});
	it('should throw an error when no arguments are passed', () => {
	assert.throws(() => modInv(), TypeError);
	});
});
