//validate integer or object

module.exports = (arg, func) =>  {
	if(typeof arg === 'boolean' || typeof arg === 'string' || arg.constructor === Array){
		throw new TypeError(`Invalid argument received: ${JSON.stringify(arg)}\n'${func}()' only accepts an integer or an object!\n`);
	}
}
