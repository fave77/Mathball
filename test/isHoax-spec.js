const assert = require('assert');
const { isHoax } = require('../src/isHoax');

describe('[Function: isHoax]', () => {
  it('should be a function', () => {
    assert.strictEqual(typeof isHoax, 'function');
  });

  it('should throw TypeError when an string is passed as an argument', () => {
    assert.throws(() => isHoax('string'), TypeError);
  });

  it('should return `true` when 84 is passed as an argument', () => {
    assert.strictEqual(isHoax(84), true);
  });

  it('should return `false` when 15 is passed as an argument', () => {
    assert.strictEqual(isHoax(15), false);
  });

  it('should return `false` when 3 is passed as an argument', () => {
    assert.strictEqual(isHoax(3), false);
  });

  it('should return `false` when 16 is passed as an argument', () => {
    assert.strictEqual(isHoax(16), false);
  });

  it('should return `false` when 19 is passed as an argument', () => {
    assert.strictEqual(isHoax(19), false);
  });
});
