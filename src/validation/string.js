/*
 * String Validation
 */

module.exports = (arg, func) => {
    if(typeof arg != 'string'){
        throw new TypeError(`Invalid argument received: ${JSON.stringify(arg)}\n'${func}()' only accept a string!\n`);
    }     
}