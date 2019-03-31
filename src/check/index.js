/*Function: check()*/

const validate = require('../validation/string');

module.exports = arg => {
    validate(arg, 'check');
    const number = require(`../${arg}`);
    if('check' in number){
        return number.check;
    }
    else{
        throw new TypeError(`Invalid argument received!`);
    } 
};
