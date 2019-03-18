/* Function: range() */

const validate = require('../validation/string');

module.exports = arg => {
    validate(arg,'range');
    return require(`../${arg}`).range;
}