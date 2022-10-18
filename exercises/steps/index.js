// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  //check if we reach the final row
  if (n === row) {
    return;
  }
  //check if we reach the end of each row
  if (n === stair.length) {
    //if we reach the row en, we print
    console.log(stair);
    //move to the next row if we reach the end of a row
    return steps(n, row + 1);
  }
  //decide print what in current position
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  //move to next position in a row
  steps(n, row, stair);
}
steps(3);
module.exports = steps;

/* function steps(n) {
    for (let row = 1; row <= n; row++) {
      let str = '';
      for (let column = 1; column <= n; column++) {
        if (column <= row) {
          str += '#';
        } else {
          str += ' ';
        }
      }
      console.log(str);
    }
  } */

/* function steps(n) {
  for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i) + ' '.repeat(n - i));
  }
} */

/* function steps(n) {
  for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i).padEnd(n));
  }
} */
