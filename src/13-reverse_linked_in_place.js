class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  push(node) {
    node.next = this.head;
    this.head = node;
    this.length += 1;
  }

  pop() {
    const node = this.head;
    this.head = node.next;
    return node.data;
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode) {
      this.head = currentNode;
      const tmpNext = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = tmpNext;
    }
    this.head = prevNode;
  }
  print() {
    let node = this.head;
    let result = "[ HEAD -> ";
    while (node) {
      result += `${node.data} -> `;
      node = node.next;
    }
    result += "NULL ]";
    console.log(result);
  }
}

const n1 = new Node(10);
const n2 = new Node(8);
const n3 = new Node(5);
const n4 = new Node(1);
const n5 = new Node(13);

// [ null -> 13 -> 1 -> 5 -> 8 -> 10 -> null ]
//        <- N     C
//             <-  N    C

const l = new List();
l.push(n1);
l.push(n2);
l.push(n3);
l.push(n4);
l.push(n5);
l.print();
l.reverse();
l.print();
