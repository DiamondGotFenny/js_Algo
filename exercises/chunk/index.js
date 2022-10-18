// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  for (let element of array) {
    //we get the last array from chunked;and array is reference type, this is importance. so that we can access to the last array in chunked via last
    const last = chunked[chunked.length - 1];
    //if we do not have an array or the previous(the old "last" array) is full we take create a new array for containing the element, as the new "last" array
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      //if the old "last" array is not full, we push element to it
      last.push(element);
    }
  }
  return chunked;
}
chunk([1, 2, 3, 4, 5, 6, 7], 3);
module.exports = chunk;

//simpler, but splice will mutates the original array and is also a heavy operation as it changes the index of each value in each use.
/* function chunk(array, size) {
  const chunked = [];

  if (array.length <= size) return [array];

  while (array.length > 0) {
    chunked.push(array.splice(0, size));
  }

  return chunked;
} */
/* function chunk(array, size) {
    const chunked = [];
  
    let index = 0;
    while (index < array.length) {
      chunked.push(array.slice(index, index + size));
      index += size;
    }
  
    return chunked;
  } */
/* function chunk(array, size) {
    let chunked = [];
    let temp =[]  ;
    for(let i=0; i < array.length; i++){
      temp.push(array[i]);
      if(temp.length === size){
          chunked.push(temp);
          temp =[]  ;
      }
    }
    if(temp.length){
      chunked.push(temp)
    }
  return chunked;
  } */
