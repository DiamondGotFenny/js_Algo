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

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minEleIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minEleIndex]) {
        minEleIndex = j;
      }
    }
    if (arr[i] !== arr[minEleIndex]) {
      let temForLesserEle = arr[minEleIndex];
      arr[minEleIndex] = arr[i];
      arr[i] = temForLesserEle;
    }
  }
  return arr;
}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
