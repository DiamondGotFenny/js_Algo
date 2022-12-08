/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 *You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * for example
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Explanation: 342 + 465 = 807.
 * Output: [7,0,8]
 */
function Node(val, next) {
  this.data = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function addTwoNumbers(list1, list2) {
  let result = new Node();

  // Keep track of the current position in the result list
  let currentPointer = result;

  // Continue looping as long as there are still nodes in either of the input lists
  while (list1 || list2) {
    // If there are still nodes in list1, add the data value to the current position in the result list
    if (list1) {
      currentPointer.data += list1.data;
      // Move to the next node in list1
      list1 = list1.next;
    }

    // If there are still nodes in list2, add the data value to the current position in the result list
    if (list2) {
      currentPointer.data += list2.data;
      // Move to the next node in list2
      list2 = list2.next;
    }

    // If the current data value is greater than or equal to 10, we need to carry over a 1 to the next digit
    if (currentPointer.data >= 10) {
      // Set the current data value to the remainder of current data value divided by 10
      currentPointer.data = currentPointer.data % 10;

      // Create a new node with a value of 1 to store the carryover
      currentPointer.next = new Node(1);
    } else if (list1 || list2) {
      // If there are still nodes in either of the input lists, create a new node in the result list
      currentPointer.next = new Node();
    }

    // Move to the next node in the result list
    currentPointer = currentPointer.next;
  }

  return result;
}

module.exports = { addTwoNumbers, Node };
