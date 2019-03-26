/*Subtraction across all data-types and data-structures
*Function: M.sub(m,n)
*/
const Complex = require('../complex');
const validate = require('../validation/argument-length');

const subNum = (a,b) => {
	return a - b;
};

const subString = (a,b) => {
	let diff = Number(a) - Number(b);
	return diff.toString(10);
};

const subArray = (a,b) => {
	let diff = new Array(a.length);
	for(let i = 0; i < a.length; i++){
		let l = a[i] - b[i];
		diff.push(l);
		diff = diff.filter(n => n);
	}
	return diff;
};

const subMatrix = (a,b) => {
        let diff = [...Array(b.length)].map(x => Array(b[0].length).fill(0));
        for(let i = 0; i < b.length; i++){
                for(let j = 0; j < b[0].length; j++){

                       diff[i][j] = a[i][j] - b[i][j];
                }
        }
        return diff;
};

const subComplex = (a,b) => {
        let diff = {
                re: 0,
                im: 0
                };
        diff.re = a.re - b.re;
	diff.im = a.im - b.im;
        return diff;
};

const sub = (a,b) => {
	switch(a.constructor){
	case Number:
		return  subNum(a,b);
	case String:
		return subString(a,b);
	case Array:
		if(a[0].constructor === Array){
			return	subMatrix(a,b);
		}
		else {
			 return subArray(a,b);
		}
	case Complex:
		return subComplex(a,b);
	}
};

module.exports = (...args) => {
	if(args.length > 2){
		throw new TypeError(`Invalid argument received: ${JSON.stringify(args)}\n'sub()' only accepts two parameters!\n`);
	}
	validate(args);
        return sub(args[0], args[1]);
};
