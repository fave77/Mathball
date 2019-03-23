/* Padovan Number
 * Function: padovan()
 */

const validate = require("../validation/positive-integer");

function pad(num) {
	let pPrevPrev = 1,
		pPrev = 1,
		pCurr = 1,
		pNext = 1;
	for (let i = 3; i <= num; i++) {
		pNext = pPrevPrev + pPrev;
		pPrevPrev = pPrev;
		pPrev = pCurr;
		pCurr = pNext;
	}
	return pNext;
}

exports.find = num => {
	validate(num, "padovan");
	return pad(num);
};
