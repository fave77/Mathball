const validateNumber = require('../validation/number');



class PriorityQueue {
	constructor(elem, priority) {
		this.element = elem;
		this.priority = priority;
	}
}



class pQ {
	constructor() {
		this.queueArr = [];
	}

	// show the current queue
	queue() {
		return this.queueArr.map(val => val.element).join(' ');
	}

	// enqueue method
	enqueue(elem, priority) {
		validateNumber(priority, 'enqueue');

		let item = new PriorityQueue(elem, priority);
		let flag = false;

		for (let i in this.queueArr) {
			if (this.queueArr[i].priority > item.priority) {
				this.queueArr.splice(i, 0, item);
				flag = true;
				break;
			}
		}

		if (!flag) {
			this.queueArr.push(item);
		}

		return true;
	}

	// dequeue
	dequeue() {
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
		return this.queueArr[0].element;
	}

	// rear of the priority queue
	rear() {
		if (this.queueArr.length === 0) {
			return 'Queue Underflow';
		}
		return this.queueArr[this.queueArr.length - 1].element;
	}
}

module.exports = pQ;
