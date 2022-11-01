// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true
//O(n)
function circular(list) {
  let fast = list.head;
  let slow = list.head;
  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}
//hash table method
/* function circular(list) {
    const nodes = new Set();
 
    for (let node of list) {
        if (nodes.has(node)) {
            return true;
        }
        nodes.add(node);
    }
 
    return false;
} */
module.exports = circular;
/**
 *Theory behind this: Floyd's Circle-Finding Algorithm
 A turtle moves at 1 unit per second, a rabbit moves at 2 units per second. There are x nodes outside of circular region, y nodes inside circular region. Therefore, the total distance when turtle meets rabbit again is presumably x+ny , (n>1).

Now, we prove the following problem exists solution:

Is there a natural number n, such that x+ny == (2-1)*t, (t>0)?

In order to answer this, we need to find a natural number n, such that: n == (t-x)/y. Of course! If t = x + y, they meet for the first time; If t = x + 2y, they meet a second time... The solution always exists.
 */
