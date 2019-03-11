const assert = require('assert');
const { ugly } = require('../src/ugly');

describe('[Function: ugly]', () => {
  it('should be a function', () => {
    assert.strictEqual(typeof ugly, 'function');
  });

  it('should return 5832 when 150 is passed as arg', () => {
    assert.strictEqual(ugly(150), 5832);
  });

  it('should throw TypeError when a negative number is passed', () => {
    assert.throws(() => ugly(-10), TypeError);
  });

  it('should throw TypeError when a string is passed', () => {
    assert.throws(() => ugly('string'), TypeError);
  });
});
