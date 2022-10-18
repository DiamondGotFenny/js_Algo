// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str
    .split(' ')
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(' ');
}

module.exports = capitalize;

/* function capitalize(str) {
    const words = [];
    for (let word of str.split(' ')) {
      words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
  } */

/* function capitalize(str) {
  return str.replace(/(^|\s)[a-z]/g, (s) => s.toUpperCase());
} */

//this consider the word start with punctuation(quotes or parentheses) and number
/* function capitalize(str) {
  // Capitalize the first alphanumeric character found, then stop
  let capitalizedStr = str.replace(/\w/, function (char) {
    return char.toUpperCase();
  });
  // Capitalize the first alphanumeric character following every space, ignoring all non-alphanumeric characters in between.
  return capitalizedStr.replace(/(?<=\s\W*)\w/g, function (char) {
    return char.toUpperCase();
  });
} */

/* function capitalize(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
} */
