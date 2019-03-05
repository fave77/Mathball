const assert = require('assert'),
	PriorityQueue = require('../src/PriorityQueue'),
	PQ = new PriorityQueue();

describe('[Function: priorityQueue]', () => {
	it('should be a function', () => {
		assert.strictEqual(typeof PriorityQueue, 'function');
	});

	it(`should return a string when 'queue()' method is called`, () => {
		assert.strictEqual(typeof PQ.queue(), 'string');
	});

	it(`should throw TypeError when a string is passed as argument in 'push()'`, () => {
		assert.throws(() => PQ.push('string'), TypeError);
	});

	it(`should return 'true' when a number is passed as argument in 'push()'`, () => {
		assert.strictEqual(PQ.push(20), true);
	});

	it(`should return '20' when 'pop()' is called, as there is '20' available in the queue`, () => {
		assert.strictEqual(PQ.pop(), 20);
	});

	it(`should return 'Queue Underflow' when 'pop()' is called, as the queue is empty`, () => {
		assert.strictEqual(PQ.pop(), 'Queue Underflow');
	});

	it(`should return 'Queue Underflow' when 'rear()' is called, as the queue is empty`, () => {
		assert.strictEqual(PQ.rear(), 'Queue Underflow');
	});

	it(`should return 'Queue Underflow' when 'front()' is called, as the queue is empty`, () => {
		assert.strictEqual(PQ.front(), 'Queue Underflow');
	});

	it(`should return 'Queue Underflow' when 'front()' is called, as the queue is empty`, () => {
		assert.strictEqual(PQ.rear(), 'Queue Underflow');
	});

	it(`should return 'true' when 'empty()' is called, as the queue is empty`, () => {
		assert.strictEqual(PQ.empty(), true);
	});

	it(`should return 'true' when 'push()' is called with a number as an arg`, () => {
		assert.strictEqual(PQ.push(20), true);
	});

	it(`should return 'true' when 'push()' is called with a number as an arg`, () => {
		assert.strictEqual(PQ.push(10), true);
	});

	it(`should return 'true' when 'push()' is called with a number as an arg`, () => {
		assert.strictEqual(PQ.push(30), true);
	});

	it(`should not return 'Queue Underflow' when 'front()' is called, as queue is not empty`, () => {
		assert.notStrictEqual(PQ.front(), 'Queue Underflow');
	});

	it(`should not return 'Queue Underflow' when 'rear()' is called, as queue is not empty`, () => {
		assert.notStrictEqual(PQ.rear(), 'Queue Underflow');
	});

	it(`should not return 'false' when 'empty()' is called, as queue is not empty`, () => {
		assert.strictEqual(PQ.empty(), false);
	});

	it(`should return 'number' when 'size()' is called`, () => {
		assert.strictEqual(typeof PQ.size(), 'number');
	});
});
