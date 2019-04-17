/*
 * Matrix Sort Type Validation
 */

module.exports = (arg, func) => {
    if (typeof arg != 'string' || (arg != 'row' && arg != 'col')) {
        throw new TypeError(`Invalid argument received: ${JSON.stringify(arg)}\n'${func}()' only accept 'row' or 'col'!\n`);
    }
};
