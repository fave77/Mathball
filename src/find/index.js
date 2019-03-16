/* Function : find() */

const validate = require('../validation/string');

module.exports = arg => {
    validate(arg,'find')
   /* return the corresponding function */
    return require(`../${arg}`).find;
  };