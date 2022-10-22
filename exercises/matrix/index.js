// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
  }

  let leftColumn = 0;
  let rightColumn = n - 1;
  let topRow = 0;
  let bottomRow = n - 1;
  let counter = 1;
  //[row, column]
  while (leftColumn <= rightColumn && topRow <= bottomRow) {
    //print counter from position[0,0] to[0,n];
    for (let i = leftColumn; i <= rightColumn; i++) {
      matrix[topRow][i] = counter;
      counter++;
    }
    //move limit to row 2, as first row is filled; start from[1,n]
    topRow++;
    //move from position[1,n] to[n,n];
    for (let i = topRow; i <= bottomRow; i++) {
      matrix[i][rightColumn] = counter;
      counter++;
    }
    //move limit to left,as final column is filled; start from column [n,n]
    rightColumn--;
    //move from position[n,n] to[n,0];
    for (let i = rightColumn; i >= leftColumn; i--) {
      matrix[bottomRow][i] = counter;
      counter++;
    }
    //move limit up, as the final row is filled, start from [n,0]
    bottomRow--;
    //move from position [n,0] to[1,1]
    for (let i = bottomRow; i >= topRow; i--) {
      matrix[i][leftColumn] = counter;
      counter++;
    }
    //move limit to right, as the first column is filled
    leftColumn++;
    //repeat the steps till all position are filled
  }
  return matrix;
}

module.exports = matrix;
//can use point to find direction
