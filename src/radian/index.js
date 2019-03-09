/*
    Convery degrees to radians
    Function: toRadians()
*/

const validate = require("../validation/number");

exports.toRadians = num => {

    validate(num, "toRadians");
    return num*Math.PI/180;
};
