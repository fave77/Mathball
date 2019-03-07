/*Complex Numbers
* Use: const a = new M.Complex(real, imaginery);
*/
const validate = require('../validation/integer-object');
class Complex {
    constructor(r,i) {
        this.r = r;
        this.i = i;
        validate(this.r, 'Complex');
        validate(this.i, 'Complex');
    }
    get re() {
        return this.r;
    }
    get im(){
        return this.i;
    }
    abs(){
        return parseFloat(Math.sqrt(Math.pow(this.r , 2) + Math.pow(this.i , 2)).toFixed(2));
    }
    conjugate(){
        let img = -this.i
        const obj = new Complex(this.r, img);
        return obj;
    }
    get conj(){
        return this.conjugate();
    }
    add(args){
        validate(args, 'add');
        if(Number.isInteger(args)){
            let obj = new Complex(this.r + args, this.i);
            return obj;
        }
        else{
            let obj = new Complex(this.r + args.r, this.i + args.i);
            return obj;
        }
    }
    sub(args){
        validate(args, 'sub');
        if(Number.isInteger(args)){
            let obj = new Complex(this.r - args, this.i);
            return obj;
        }
        else{
            let obj = new Complex(this.r - args.r, this.i - args.i);
            return obj;
            }
        }
    multiply(args){
        validate(args, 'multiply');
        if(Number.isInteger(args)){
            let obj = new Complex(this.r * args, this.i * args);
            return obj;
        }
        else{
            let obj = new Complex((this.r * args.r - this.i * args.i),
                        ( this.r * args.i + args.r * this.i));
            return obj;
            }
    }
    divide(args){
        validate(args, 'divide');
        if(Number.isInteger(args)){
            let obj = new Complex(parseFloat(this.r/args),
                         parseFloat(this.i/args));
            return obj;
        }
        else {
        let dm = Math.pow(args.r, 2) + Math.pow(args.i , 2);
        let real = parseFloat(((this.r * args.r + this.i * args.im)/dm).toFixed(2));
        let img = parseFloat(((args.r * this.i - this.r * args.i)/dm).toFixed(2));
        let obj = new Complex(real, img);
        return obj;
        }

    }
}
module.exports = Complex;
