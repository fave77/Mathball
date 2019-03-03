const assert = require('assert'),
	PriorityQueue = require('../src/priorityQueue'),
	PQ = new PriorityQueue();

describe('[Function: priorityQueue]', () => {
	it('should be a function', () => {
		assert.strictEqual(typeof PriorityQueue, 'function');
	});

	it('should throw TypeError when a string is passed as `priority` in enqueue method', () => {
		assert.throws(() => PQ.enqueue(10, 'hello'), TypeError);
	});

	it('should throw TypeError when an object is passed as `priority` in enqueue method', () => {
		assert.throws(() => PQ.enqueue(10, { foo: 'bar' }), TypeError);
	});

	it('should return `Queue Underflow`', () => {
		assert.strictEqual(PQ.dequeue(), 'Queue Underflow');
	});

	it('should return `Queue Underflow`', () => {
		assert.strictEqual(PQ.front(), 'Queue Underflow');
	});

	it('should return `Queue Underflow`', () => {
		assert.strictEqual(PQ.rear(), 'Queue Underflow');
	});

	it('should return `true` when 2 is passed as `priority` in enqueue method', () => {
		assert.strictEqual(PQ.enqueue(10, 2), true);
	});

	it('should return `true` when 3 is passed as `priority` in enqueue method', () => {
		assert.strictEqual(PQ.enqueue(10, 3), true);
	});

	it('should return `true` when 1 is passed as `priority` in enqueue method', () => {
		assert.strictEqual(PQ.enqueue(10, 1), true);
	});

	it('should return a String', () => {
		assert.strictEqual(typeof PQ.queue(), 'string');
	});

	it('should not return `Queue Underflow`', () => {
		assert.notStrictEqual(PQ.dequeue(), 'Queue Underflow');
	});

	it('should not return `Queue Underflow`', () => {
		assert.notStrictEqual(PQ.front(), 'Queue Underflow');
	});

	it('should not return `Queue Underflow`', () => {
		assert.notStrictEqual(PQ.rear(), 'Queue Underflow');
	});
});
