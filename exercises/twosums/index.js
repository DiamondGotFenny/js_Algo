/* Given an array of integers nums and an integer target, return
 indices of the two numbers such that they add up to target.
You may not one solution, and you may not use the same element twice.
if the input array is empty or only has one element,return null;
if there is no solution, return null as well.
You can return the answer in any order. */

//we use the numberToFind to check if we have the same number in the rest element in the array.
function twoSum(arr, target) {
  //numberToFind will be the key and current index will be the value
  const numsMap = {};
  for (let p = 0; p < arr.length; p++) {
    /*for example, inpuy is [3, 2, 5, 1, 9], target=14
     **if p=2, then arr[p]=5,the numsMap is{..,9:2}; if p=4, then arr[p]=9, numsMap is {...,9:2,...,5:4}
     *so when p=4, arr[4]=9,currentMapValIndex=numsMap[9]=2, it exist and >=0,
     */
    const currentMapValIndex = numsMap[arr[p]];
    if (currentMapValIndex >= 0) {
      return [currentMapValIndex, p];
    } else {
      const numberToFind = target - arr[p];
      numsMap[numberToFind] = p;
    }
  }
  return null;
}
twoSum([3, 2, 5, 1, 9], 14);
module.exports = twoSum;

/* function twoSum(arr, target) {
  for (let p1 = 0; p1 < arr.length; p1++) {
    let numberToFind = target - arr[p1];
    for (let p2 = p1 + 1; p2 < arr.length; p2++) {
      if (arr[p2] === numberToFind) {
        return [p1, p2];
      }
    }
  }
  return null;
} */
