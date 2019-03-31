/* Function: range() */

const validate = require('../validation/string');

module.exports = arg => {
    validate(arg,'range');
    const number = require(`../${arg}`);
    if('range' in number){
        return require(`../${arg}`).range;
    }
    else{
        throw new TypeError(`Invalid argument received!`);
    }
};
