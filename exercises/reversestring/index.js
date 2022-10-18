// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*this solution not gonna to get high score for your interview
*cuz it is kind of cheat
* function reverse(str) {
  return str.split('').reverse().join('');
} */
/*notice this segment code: "character + reversed", 
 *the order of this two variable is the trick
 *use "for of" for cleaner code here;
 * function reverse(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}
 */

/* function reverse(str) {
 return str.split('').reduce((reversed, character) => character + reversed);
} */

function reverse(str) {
  return str.split('').reduceRight((reversed, character) => {
    return reversed + character;
  }, '');
}

module.exports = reverse;

//for debug used
reverse('abd');
