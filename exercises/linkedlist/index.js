// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let counts = 0;
    let node = this.head;
    while (node) {
      counts++;
      node = node.next;
    }
    return counts;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
  }
  removeLast() {
    /*  if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let current = this.head.next;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null; */

    if (!this.head || !this.head.next) {
      this.head = null;
      return;
    }
    let node = this.head;
    while (node.next.next) {
      node = node.next;
    }
    node.next = null;
  }
  insertLast(data) {
    let last = this.getLast();
    const newNode = new Node(data, null);
    if (last) {
      last.next = newNode;
    } else {
      this.head = newNode;
    }
  }
  getAt(index) {
    let counter = 0;
    let node = this.head;
    //if this.head===null, it will not enter the while loop
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    //if index couldn't find
    return null;
  }
}

module.exports = { Node, LinkedList };
