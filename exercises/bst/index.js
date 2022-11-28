// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert(data) {
    // if the input data is bigger smaller than current node value
    //it goes left; and if there is already a left node there
    //we checking with that left node
    if (data < this.data && this.left) {
      this.left.insert(data);
      //if there is no left node there, we put that data as left node
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }
  contains(data) {
    if (this.data === data) {
      return this;
    }
    if (data < this.data && this.left) {
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    }
    return null;
  }

  //while loop version
  /*  contains(value) {
    let node = this;

    while (node) {
      if (value < node.data) {
        if (node.left) node = node.left;
        else return null;
      } else if (value > node.data) {
        if (node.right) node = node.right;
        else return null;
      } else {
        return node;
      }
    }
  } */
}
module.exports = Node;
