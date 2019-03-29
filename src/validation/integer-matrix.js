/*
Validation: Integer Matrix
*/

module.exports = (args, func) => {
	if(args.constructor !== Array || args[0].constructor !== Array){
		throw new TypeError(`Invalid argument received: '${args}' , '${func}' only accepts a N-d array of numbers!`);
	}
	for(let i = 0; i < args.length; i++){
		args[i].forEach((e) => {
			if(typeof e !== 'number'){
				throw new TypeError(`Invalid argument received: '${args}' , '${func}' only accepts a N-d array of positive integers!`);
			}
		});
	}
};
