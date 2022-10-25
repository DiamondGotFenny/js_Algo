// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

/* class Stack {
  constructor() {
    this.data = [];
  }
  push(value) {
    this.data.push(value);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
} */

//without using array
// We create a class for each node within the stack
class Node {
  // Each node has two properties, its value and a pointer that indicates the node that follows
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// We create a class for the stack
class Stack {
  // The stack has three properties, the first node, the last node and the stack size
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // The push method receives a value and adds it to the "top" of the stack
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  // The pop method eliminates the element at the "top" of the stack and returns its value
  pop() {
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
}

const stck = new Stack();

module.exports = Stack;
