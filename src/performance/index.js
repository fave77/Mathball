/* Function: performance() */

module.exports = (fn, ...arg) => {
	console.time('\x1b[36mTime Taken\x1b[0m');
	fn(...arg);
	console.timeEnd('\x1b[36mTime Taken\x1b[0m');
}
