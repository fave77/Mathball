/*Addition for all datatypes and data-structures
*Function: M.add(...args)
*/
const Complex = require('../complex');
const validate = require('../validation/argument-length');

const add = (...args) => {
	switch(args[0].constructor){
	case Number:
		return  addNum(...args);
	case String:
		return addString(...args);
	case Array:
		if(args[0][0].constructor === Array){
			return args.reduce((prev, next) =>
					addMatrix(prev, next));
		}
		else{
			 return args.reduce((prev, next) =>
					addArray(prev, next));
		}
	case Complex:
		return addComplex(...args);
	}
};

const addNum = (...args) => {
	let sum = 0;
	args.forEach((e) => {
		sum += e;
	});
	return sum;
};

const addString = (...args) => {
	let sum = 0;
	args.forEach((e) => {
		sum += Number(e);
	});
	sum = sum.toString(10);
	return sum;
};

const addArray = (a,b) => {
	let sum = new Array(b.length);
	for(let i = 0; i < b.length; i++){
		let l = a[i] + b[i];
		sum.push(l);
		sum = sum.filter(n => n);
	}
	return sum;
};

const addMatrix = (a,b) => {
	let sum = [...Array(b.length)].map(x => Array(b[0].length).fill(0));
	for(let i = 0; i < b.length; i++){
		for(let j = 0; j < b[0].length; j++){

			sum[i][j] = a[i][j] + b[i][j];
		}
	}
	return sum;
};

const addComplex = (...args) => {
	let sum = {
		re: 0,
		im: 0
		};
	args.forEach((e) => {
		sum.re += e.re;
		sum.im += e.im;
	});
	return sum;
};

module.exports = (...args) => {
	if(args.length <= 1){
		throw new TypeError(`Invalid argument received: ${JSON.stringify(args)}\n 'add()' only accepts 2 or more parameters!\n`);
	}
	else {
	validate(args);
	}
	return add(...args);
};
