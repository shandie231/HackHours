/**
 * 
 * First, create a Stack which contains the following methods:
 * - push: add value to top (end) of stack
 * - pop: remove value from top (end) of stack
 * 
 * Second, create a Queue which consists of two stacks: stack1 and stack2
 * and contains the following methods:
 * - enqueue: add value to queue
 * - dequeue: remove value from queue
 * Queue methods should follow First In, First Out rule.
 * 
 * DO NOT USE NATIVE JS METHODS
 * 
 */

function Stack() {
    let outputStack = [];
    this.push = function(arg){
        if(outputStack.length>0){
            outputStack[outputStack.length] = arg;
        }else{
            outputStack[0] = arg;
        }
        return outputStack;
    }
    this.pop = function(){
        const poppedStack = [];
        if(outputStack.length<1){
            return `Nothing in stack`;
        }else{
            for(let i = 0; i<outputStack.length -1; i++){
                poppedStack[i] = outputStack[i];
            }
            outputStack = poppedStack;
            return outputStack;
        }
    }
    

    
}

function Queue() {
    const outputStack = [];
    this.enqueue = function(arg){
        
    }
    this.dequeue = function(){
        
    }

}
const newStack = new Stack();

console.log(newStack.push(1));
console.log(newStack.push(2));
console.log(newStack.push(3));

console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());

module.exports = { Stack, Queue };
