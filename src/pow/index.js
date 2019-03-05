
const validate = require('../validation/number-array');


function pow(a, b, c = Number.MAX_SAFE_INTEGER)
{
    if(b == 0)
		{
			return 1;
		}
    
    var y;
    if(b%2 == 0){
        y = pow(a, b/2, c);
        y = (y*y)%c;
    }
    else{
        y = a%c;
        y = (y* pow(a, b-1, c)%c)%c;
    }
    return Math.trunc((y+c)%c);
}

module.exports = arr => {
    validate(arr, 'pow');
    if( arr.length == 3)
		{
			return pow(arr[0], arr[1], arr[2]);
		}
    else
		{
			return pow(arr[0], arr[1]);
		}
};
