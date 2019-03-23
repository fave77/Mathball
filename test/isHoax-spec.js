const assert = require('assert'),
	hoax = require('../src/hoax').check;

describe('[Function: hoax]', () => {
  it('should be a function', () => {
    assert.strictEqual(typeof hoax, 'function');
  });

  it('should throw TypeError when an string is passed as an argument', () => {
    assert.throws(() => hoax('string'), TypeError);
  });

  it('should return `true` when 84 is passed as an argument', () => {
    assert.strictEqual(hoax(84), true);
  });

  it('should return `false` when 15 is passed as an argument', () => {
    assert.strictEqual(hoax(15), false);
  });

  it('should return `false` when 3 is passed as an argument', () => {
    assert.strictEqual(hoax(3), false);
  });

  it('should return `false` when 16 is passed as an argument', () => {
    assert.strictEqual(hoax(16), false);
  });

  it('should return `false` when 19 is passed as an argument', () => {
    assert.strictEqual(hoax(19), false);
  });
});
