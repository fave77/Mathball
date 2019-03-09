/*
    Convery radians to degrees
    Function: toDegrees()
*/

const validate = require("../validation/number");

exports.toDegrees = num => {

    validate(num, "toDegrees");
    return num*180/Math.PI;
};