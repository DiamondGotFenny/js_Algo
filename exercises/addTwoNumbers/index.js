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
const L = require('./LinkedList');
const List = L.LinkedList;
function reverseInt(arr) {
  return arr.reverse().join('');
}
function addTwoNumbers(list1, list2) {
  let p1 = list1.head;
  let arr1 = [];
  let p2 = list2.head;
  let arr2 = [];
  while (p1) {
    arr1.unshift(p1.data);
    p1 = p1.next;
  }
  while (p2) {
    arr2.unshift(p2.data);
    p2 = p2.next;
  }
  let sum = parseInt(arr1.join('')) + parseInt(arr2.join(''));

  let resultArr = sum
    .toString()
    .split('')
    .reverse()
    .map((char) => parseInt(char));
  let newList = new List();
  while (resultArr.length > 0) {
    newList.insertLast(resultArr.shift());
  }
  return newList;
}

module.exports = addTwoNumbers;
