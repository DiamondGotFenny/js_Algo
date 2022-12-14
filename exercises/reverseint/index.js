// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//without using array and string
function reverseInt(n) {
  let reverseInt = 0;
  while (n !== 0) {
    //first, shift the last number to first place of line
    //the trick here is if n%10 left any number, it will return that number
    //e.g 15%10 return 5. 13%2 return 1...
    reverseInt = reverseInt * 10 + (n % 10);
    //we need the loop end if n should be the last number; and ParstInt will return 0 if n<10; without parseInt, JS will result this division as float.
    // e.g. 15/10 return 1.5; then n=1
    n = parseInt(n / 10);
    //then reverseInt=50+1=51
    //then parseInt(0.1)=0, while loop ends
  }
  return reverseInt;
}

reverseInt(-2000);

module.exports = reverseInt;

/**
 * function reverseInt(n) {
  // turn a number into a string, then turn it into an array to reverse.
  const reversed = n.toString().split('').reverse().join('');
  // Math.sign will return -1 as for negative number, 1 as for position number, 0 as for zero.
  return Math.sign(n) * parseInt(reversed);
}
 */
