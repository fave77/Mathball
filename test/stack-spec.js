const assert = require('assert'),
        Stack = require('../src/stack/'),
        sample = new Stack();

describe('[Function: Stack]', () => {

    sample.push(10);
    sample.push(20);
    sample.push(30);
    
    it('should be a function', () => {
        assert.strictEqual(typeof Stack, 'function');
    });

    it(`should return '30' when 'head()' is called`, () => {
        assert.strictEqual(sample.head(), 30);
    });
    
    it(`should return 'false' when 'isEmpty()' is called`, () => {
        assert.strictEqual(sample.isEmpty(), false);
    });

    it(`should return 'number' when 'size()' is called`, () => {
        assert.strictEqual(typeof sample.size(), 'number');
    });

    it(`should return '3' when 'size()' is called`, () => {
        assert.strictEqual(sample.size(), 3);
    });

    it(`should throw TypeError when a string is passed as argument in 'push()'`, () => {
        assert.throws(() => sample.push('string'), TypeError);
    });

    it(`should return 'object' type when 'copy()' is called`, () => {
        assert.strictEqual(typeof sample.copy(), 'object');
    });

    it(`should return '30 20 10' type when 'display()' is called`, () => {
        assert.strictEqual(sample.display(), '30 20 10');
    });

    it(`should return '30' when 'pop()' is called`, () => {
        assert.strictEqual(sample.pop(), 30);
    });

    it(`should return '20' when 'pop()' is called`, () => {
        assert.strictEqual(sample.pop(), 20);
    });

    it(`should return '10' when 'pop()' is called`, () => {
        assert.strictEqual(sample.pop(), 10);
    });

    it(`should return 'Stack Underflow' when 'pop()' is called`, () => {
        assert.strictEqual(sample.pop(), 'Stack Underflow');
    });


    it(`should return 'Empty Stack' when 'head()' is called`, () => {
        assert.strictEqual(sample.head(), 'Empty Stack');
    });

    it(`should return 'true' when 'isEmpty()' is called`, () => {
        assert.strictEqual(sample.isEmpty(), true);
    });

});
        