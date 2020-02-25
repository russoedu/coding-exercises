/**
 * Make a queue with two stacks
 */

class Stack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }

  push(data) {
    this.stack.push(data);
    this.length += 1;
  }

  pop() {
    const data = this.stack.pop();
    this.length -= typeof data === "undefined" ? 0 : 1;
    return data;
  }
}

class Queue {
  constructor() {
    this.storageStack = new Stack();
    this.tempStack = new Stack();
    this.length = 0;
  }
  enqueue(data) {
    this.storageStack.push(data);
    this.length += 1;
  }

  dequeue() {
    const storageStack = this.storageStack;
    const tempStack = this.tempStack;

    // Move data from the storage to the temp until only 1 item is left
    while (storageStack.length > 1) {
      tempStack.push(storageStack.pop());
    }
    // Pop the last item
    const data = storageStack.pop();
    this.length -= typeof data === "undefined" ? 0 : 1;

    // Move the stack back to the storage stack
    while (tempStack.length > 0) {
      storageStack.push(tempStack.pop());
    }
    return data;
  }
}
const s = new Stack();
s.push(1);
console.log(s.pop());
console.log(s.pop());
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
console.log("STACK POP");
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());

const q = new Queue();
q.enqueue(1);
console.log(q.dequeue());
console.log(q.dequeue());
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
console.log("QUEUE DEQUEUE");
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
