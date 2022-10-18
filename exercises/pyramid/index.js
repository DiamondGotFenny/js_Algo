// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '#'.repeat(i * 2 - 1) + ' '.repeat(n - i));
  }
}
module.exports = pyramid;

/* function pyramid(n) {
  //const midpoint = Math.floor((2 * n - 1) / 2);
  //n is the midpoint(row start at 0) in the row
  const midpoint = n - 1;
  for (let row = 0; row < n; row++) {
    let level = '';
    //row is symmetrical, so its length must be odd.
    for (let column = 0; column < 2 * n - 1; column++) {
      //in the left side of midpoint, when row > column, it is #
      //in the right side of midpoint, when row<column, it is #
      //when when column =midpoint, it must be "#"
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
} */

/* function pyramid(n) {
  for (let i = 0; i < n; i++) {
    let emptyStr = ' ';
    emptyStr = emptyStr.repeat(n - i - 1);

    let hash = '#';
    hash = hash.repeat(i * 2 + 1);
    console.log(emptyStr + hash + emptyStr);
  }
} */