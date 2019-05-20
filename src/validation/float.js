

module.exports = (arg, func) =>  {
	if (!(Number(arg) === arg && arg % 1 !== 0)) {
	  throw new TypeError(`Invalid argument received: ${JSON.stringify(arg)}\n'${func}()' only accept a positive integer!\n`);
      }
};
