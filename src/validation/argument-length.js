/*
* Argument and Length validation
*/
const Complex = require('../complex');
module.exports = (...args) => {
	if(args[0][0].constructor === Number){
		for(let i = 0; i < args[0].length; i++){
				if(typeof args[0][i] !== 'number'){
					throw new TypeError(`Invalid argument received: ${JSON.stringify(args)}\n, 'function' only accepts parameters of similar types!\n`)
			}
		}
	}
	else if(args[0][0].constructor === String){
		for(let i = 0; i < args[0].length; i++){
			if(typeof args[0][i] !== 'string'){
				throw new TypeError(`Invalid argument received: ${JSON.stringify(args)}\n 'function' only accepts parameters of similar types!\n`);
			}
		}
	}
	else if(args[0][0].constructor === Array){
		let arr = args[0];
		if(arr[0][0].constructor === Array){
			let len = arr[0][0].length;
			for(let i = 0; i < arr.length; i++){
				for(let j = 0; j < arr[0].length; j++){
					if(arr[i][j].length !== len){
						throw new TypeError(`Invalid argument received: ${JSON.stringify(args)}\n 'function' only accepts parameters of similar length!\n`);
					}
				}
			}
			for(let i = 0; i < arr.length; i++){
				for(let j = 0 ;j< arr[0].length; j++){
					for(let k = 0; k < arr[0][0].length; k++){
						if(typeof arr[i][j][k] !== 'number'){
							throw new TypeError(`Invalid argument received: ${JSON.stringify(args)}\n 'function' only accepts parameters of similar types!\n`);
						}
					}
				}
			}
		}
		else{
			for(let i = 0; i < arr.length; i++){
				for(let j = 0; j < arr.length; j++){
					if(arr[i].length !== arr[j].length){
						throw new TypeError(`Invalid argument received: ${JSON.stringify(args)}\n 'function' only accepts parameters of similar length!\n`);
					}
				}
			}
			for(let i = 0; i < arr.length; i++){
				for(let j = 0; j < arr[0].length; j++){
					if(typeof arr[i][j] !== 'number'){
						throw new TypeError(`Invalid argument received: ${JSON.stringify(args)}\n 'function' only accepts parameters of similar types!\n`);
					}
				}
			}
		}

	}
	else if(args[0][0].constructor === Complex){
		for(let i = 0; i < args[0].length; i++){
			if(args[0][i].constructor !== Complex){
				throw new TypeError(`Invalid argument received: ${JSON.stringify(args)}\n 'function' only accepts parameters of similar types!\n`);
			}
		}
	}
	else{
		throw new TypeError(`Invalid argument received: ${JSON.stringify(args)}\n`);
	}
};//End of module exports
