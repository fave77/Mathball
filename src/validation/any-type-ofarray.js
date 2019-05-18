module.exports = (arg, func) => {
 
 if(arg && arg.constructor == Array){
    return true;
 }
 else{
    return false;
 }
};
