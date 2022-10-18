// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let ob = {};
  for (let char of str) {
    ob[char] = ob[char] + 1 || 1;
  }
  // Object.keys will create an array containing the keys of ob
  // reduce() will iterate trough the array and keep the highest value
  return Object.keys(ob).reduce((a, b) => (ob[a] > ob[b] ? a : b));
}

module.exports = maxChar;

/* function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  // Loop through the string char by char adding it to the dictionary
  // or incrementing its value if it already exists.
  for (let c of str) {
    // If the char exists in the dictionary increment its value by 1.
    // Else set its initial value to 1.
    charMap[c] = charMap[c] ? charMap[c] + 1 : 1;

    // As characters are added or incremented in the map,
    // compare the current value for that key to the last value that was cached.
    // By the end of the string the last cached max char should be the one
    // with the highest value.
    if (charMap[c] > max) {
      max = charMap[c];
      maxChar = c;
    }
  }

  return maxChar;
} */
