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
    this.stack = {};
    this.length = 0;
}

Stack.prototype.push = (val) => {
    this.stack[this.length] = val;
    this.length++;
    return this.length;
}

Stack.prototype.pop = () => {
    if(!this.length) return;

    const poppedVal = this.stack[this.length - 1];
    delete this.stack[this.length - 1];
    return poppedVal;
}


const Queue = () => {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
}

Queue.prototype.enqueue = (val) => {
    this.stack1.push(val);
}

Queue.prototype.dequeue = () => {
    if(!this.stack1.length && !this.stack2.length) return;

    if(!this.stack2.length) {
        while(this.stack1.length){
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop();
}


module.exports = { Stack, Queue };
