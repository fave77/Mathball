const assert = require('assert'),
	priorityQueue = require('../src/priorityQueue'),
	pQ = new priorityQueue();

describe('[Function: priorityQueue]', () => {
	it('should be a function', () => {
		assert.strictEqual(typeof priorityQueue, 'function');
	});

	it('should throw TypeError when a string is passed as `priority` in enqueue method', () => {
		assert.throws(() => pQ.enqueue(10, 'hello'), TypeError);
	});

	it('should throw TypeError when an object is passed as `priority` in enqueue method', () => {
		assert.throws(() => pQ.enqueue(10, { foo: 'bar' }), TypeError);
	});

	it('should return `Queue Underflow`', () => {
		assert.strictEqual(pQ.dequeue(), 'Queue Underflow');
	});

	it('should return `Queue Underflow`', () => {
		assert.strictEqual(pQ.front(), 'Queue Underflow');
	});

	it('should return `Queue Underflow`', () => {
		assert.strictEqual(pQ.rear(), 'Queue Underflow');
	});

	it('should return `true` when 2 is passed as `priority` in enqueue method', () => {
		assert.strictEqual(pQ.enqueue(10, 2), true);
	});

	it('should return `true` when 3 is passed as `priority` in enqueue method', () => {
		assert.strictEqual(pQ.enqueue(10, 3), true);
	});

	it('should return `true` when 1 is passed as `priority` in enqueue method', () => {
		assert.strictEqual(pQ.enqueue(10, 1), true);
	});

	it('should return a String', () => {
		assert.strictEqual(typeof pQ.queue(), 'string');
	});

	it('should not return `Queue Underflow`', () => {
		assert.notStrictEqual(pQ.dequeue(), 'Queue Underflow');
	});

	it('should not return `Queue Underflow`', () => {
		assert.notStrictEqual(pQ.front(), 'Queue Underflow');
	});

	it('should not return `Queue Underflow`', () => {
		assert.notStrictEqual(pQ.rear(), 'Queue Underflow');
	});
});
