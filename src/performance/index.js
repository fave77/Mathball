/* Function: performance() */

const validate = require('../validation/performance');

module.exports = (fn, ...arg) => {
	validate(fn, arg, 'performance')
	switch(arg.length) {
		case 0:
			console.time('\x1b[36mTime Taken\x1b[0m');
			fn();
			console.timeEnd('\x1b[36mTime Taken\x1b[0m');
			break;
		case 1:
			console.time('\x1b[36mTime Taken\x1b[0m');
			fn(arg[0]);
			console.timeEnd('\x1b[36mTime Taken\x1b[0m');
			break;
		case 2:
			console.time('\x1b[36mTime Taken\x1b[0m');
			fn(arg[0], arg[1]);
			console.timeEnd('\x1b[36mTime Taken\x1b[0m');
			break;
		case 3:
			console.time('\x1b[36mTime Taken\x1b[0m');
			fn(arg[0], arg[1], arg[2]);
			console.timeEnd('\x1b[36mTime Taken\x1b[0m');
			break;
	}
}
