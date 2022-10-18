// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//this may fit to all languages
function palindrome(str) {
  const size = str.length - 1;
  for (let index = 0; index < size / 2; index++) {
    if (str[index] !== str[size - index]) {
      return false;
    }
  }
  return true;
}

module.exports = palindrome;

/* function palindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  } */

/**
 * the potential issue for this solution is unneccessary iterate the second part of elements in the array
 * function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - 1 - i];
  });
}
 */

/**
 * function palindrome(str) {
  return str.split('', str.length / 2).every((char, i) => {
    return char === str[str.length - 1 - i];
  });
}
 */
