// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temForLesserEle = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temForLesserEle;
      }
    }
  }
  return arr;
}
bubbleSort([100, -40, 500, -124, 0, 21, 7]);

function selectionSort(arr) {}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
