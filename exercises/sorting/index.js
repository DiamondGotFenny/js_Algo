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

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let center = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, center);
  let rightArr = arr.slice(center);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

mergeSort([100, -40, 500, -124, 0, 21, 7]);

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
