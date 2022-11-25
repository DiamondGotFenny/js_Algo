/* Given an array of integers nums and an integer target, return
 indices of the two numbers such that they add up to target.
You may not one solution, and you may not use the same element twice.
if the input array is empty or only has one element,return null;
if there is no solution, return null as well.
You can return the answer in any order. */

function twoSum(arr, target) {
  for (let p1 = 0; p1 < arr.length; p1++) {
    let numberToFind = target - arr[p1];
    for (let p2 = p1 + 1; p2 < arr.length; p2++) {
      if (arr[p2] === numberToFind) {
        return [p1, p2];
      }
    }
  }
  return null;
}
module.exports = twoSum;
