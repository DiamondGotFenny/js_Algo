// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

/* class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.push(record);
  }
  remove() {
    return this.data.shift();
  }
  peek() {
    return this.data[0];
  }
} */

//without using class
/* function Queue() {
    var collection = [];
    this.print = function () {
      console.log(collection);
    }
    this.enqueue = function (element) {
      collection.push(element);
    }
    this.dequeue = function () {
      return collection.shift();
    }
    this.front = function () {
      return collection[0];
    }
  
    this.isEmpty = function () {
      return collection.length === 0;
    }
    this.size = function () {
      return collection.length;
    }
  } */

//without using array
// We create a class for each node within the queue
class Node {
  // Each node has two properties, its value and a pointer that indicates the node that follows
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// We create a class for the queue

class Queue {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      return (this.head = newNode);
    }

    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
    ++this.size;
  }
  remove() {
    if (!this.head) {
      return undefined;
    }
    if (!this.head.next) {
      const value = this.head.value;
      this.head = null;
      return value;
    }
    const node = this.head;
    this.head = this.head.next;
    --this.size;
    return node.value;
  }
  peek() {
    if (!this.head) {
      return undefined;
    }

    return this.head.value;
  }
}

//double linked list
/* class Queue {
  // The queue has three properties, the first node, the last node and the stack size
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // The enqueue method receives a value and adds it to the "end" of the queue
  add(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  // The dequeue method eliminates the element at the "beginning" of the queue and returns its value
  remove() {
    if (!this.first) return undefined;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = undefined;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  peek() {
    if (!this.first) return undefined;
    return this.first.value;
  }
} */
/* const newQ = new Queue();
newQ.add('value 1');
newQ.add('value 2');
newQ.add('value 3');
console.log(newQ.first);
console.log(newQ.last);
console.log(newQ.size); */
module.exports = Queue;
