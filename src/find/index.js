/* Function : find() */

const validate = require('../validation/string');

module.exports = arg => {
    validate(arg,'find');
    const number = require(`../${arg}`);
    if('find' in number){
        return require(`../${arg}`).find;
    }
    else{
        throw new TypeError(`Invalid argument received!`);
    }
};
