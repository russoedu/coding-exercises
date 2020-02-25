/**
 * Make a stack with two queues
 */

/**
 * Queues data are inserted in the back and removed from the front
 */
class Queue {
  constructor() {
    this.queue = [];
    this.length = 0;
  }
  dequeue() {
    const p = this.queue.shift();
    this.length -= typeof p === "undefined" ? 0 : 1;
    return p;
  }

  enqueue(data) {
    this.queue.push(data);
    this.length += 1;
  }
}

/**
 * Stacks data are always inserted and removed from the top
 */
class Stack {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
    this.length = 0;
  }

  push(data) {
    const q = this.q1.length >= this.q2.length ? this.q1 : this.q2;
    q.enqueue(data);
    this.length += 1;
  }

  pop() {
    const deq = this.q1.length === 0 ? this.q2 : this.q1;
    const enq = this.q1.length === 0 ? this.q1 : this.q2;

    while (deq.length > 1) {
      enq.enqueue(deq.dequeue());
    }

    const data = deq.dequeue();
    this.length -= typeof data === "undefined" ? 0 : 1;
    return data;
  }
}

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
