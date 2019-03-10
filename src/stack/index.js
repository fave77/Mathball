const validate = require("../validation/number");

class Stack{
    constructor(){
        this.stack = [];
    }

    push(data){
        validate(data, 'Stack.push');
        this.stack.push(data);
    }

    pop(){
        if(this.size() === 0){
            return "Stack Underflow";
        }

        else{
            return this.stack.pop();
        } 
    }

    isEmpty(){
        return (this.size() === 0);
    }

    head(){
        if(this.size() === 0){
            return "Empty Stack";
        }
        else{
            return this.stack[this.size() -1];
        }
    }

    size(){
        return this.stack.length;
    }

    copy(){
        let internal = new Stack();
        
        for(let i = 0; i<this.size(); i++){
            internal.push(this.stack[i]);
        }

        return internal;
    }

    display(){
        let temp = this.stack.reverse().join(' ');
        this.stack.reverse();
        return temp;
    }
}

module.exports = Stack;