// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
//we may reuse the getAt() to implement some method, so that reduce
//duplicated code
class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    //the reused code here is not good, as insertAt() is O(2n)
    //this.insertAt(data, 0);
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
    //but compare to the original one(which is O(n)), this is O(2n)
    //so this might not be a good solution
    // return this.getAt(this.size() - 1);

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
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
    }
    let previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;

    /* if (index === 0) {
      this.head = this.head && this.head.next
      return
    }
    let prevNode = this.getAt(index - 1)
    if (prevNode) {
      prevNode.next = prevNode.next && prevNode.next.next
    } */
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data, null);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    //if this.getAt(index - 1)===undefined, that means index may be the last
    //ele, then we return the last ele, we should add that ele as last ele
    //O(2n)as getLast() and getAt() is two O(n)
    let previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;

    //solution 2 O(n)
    // insert in the beginning
    /* if (!this.head || index === 0) {
      this.insertFirst(data);
      return;
    }

    let counter = 0;
    let previousNode;
    let node = this.head;

    while (counter < index) {
      // end of list / out of bound
      if (!node.next) {
        node.next = new Node(data);
        return;
      }
      previousNode = node;
      node = node.next;
      counter++;
    }

    // insert in the middle
    if (previousNode) {
      previousNode.next = new Node(data, node);
    } */

    //solution 3
    /*  if (index === 0) return this.insertFirst(data);
    let node = this.head;
    for (let i = 1; i < index; i++) {
      if (node.next) node = node.next;
    }
    node.next = new Node(data, node.next); */
  }
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
  //generator version for for...of linked list
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
