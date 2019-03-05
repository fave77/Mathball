const validateNumber = require('../validation/number');

class PriorityQueue {
	constructor() {
		this.queueArr = [];
	}

	// show the current queue
	queue() {
		return this.queueArr.join(' ');
	}

	// enqueue method
	push(elem) {
		validateNumber(elem, 'PriorityQueue.push');

		let flag = false;

		for (let i in this.queueArr) {
			if (this.queueArr[i] > elem) {
				this.queueArr.splice(i, 0, elem);
				flag = true;
				break;
			}
		}

		if (!flag) {
			this.queueArr.push(elem);
		}

		return true;
	}

	// dequeue
	pop() {
		if (this.queueArr.length === 0) {
			return 'Queue Underflow';
		}
		return this.queueArr.shift();
	}

	// front of the priority queue
	front() {
		if (this.queueArr.length === 0) {
			return 'Queue Underflow';
		}
		return this.queueArr[0];
	}

	// rear of the priority queue
	rear() {
		if (this.queueArr.length === 0) {
			return 'Queue Underflow';
		}
		return this.queueArr[this.queueArr.length - 1];
	}

	// returns if the queue is empty or not
	empty() {
		return this.queueArr.length === 0 ? true : false;
	}

	// should return the queue size
	size() {
		return this.queueArr.length;
	}
}

module.exports = PriorityQueue;
