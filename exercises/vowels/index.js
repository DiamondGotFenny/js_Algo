// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//O(n)
function vowels(str) {
  if (!str || str.length === 0) return 0; // Step 1

  const vowelMap = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  }; // Step 2

  let count = 0; // Step 3

  for (let char of str) {
    // Step 4
    count += vowelMap[char.toLowerCase()] || 0; // Step 5
  }

  return count; // Step 6
}

module.exports = vowels;

/* function vowels(str) {
  return str.replace(/[^aeiou]/gi, '').length;
} */

/* const vowels = str => {
    const vowels = 'aeiou';
    return str
      .toLowerCase()
      .split('')
      .filter(char => vowels.includes(char)).length;
  } */

/* const vowels = str => str
  .toLowerCase().split('')
  .reduce((acc, char) => ((['a', 'e', 'i', 'o', 'u']
    .includes(char)) ? acc + 1 : acc), 0); */

//the includes() function has performance issues, it is O(5n);
/* Since we have to visit every character in the string we're scanning for vowels, that will be O(N) for the size of the string we are scanning. The includes method is nested inside of the for loop iterating through our string. In conclusion, the worst case time complexity for this solution would be O(N*M) because they will most likely be different in length. If the collection of vowels and the string have the same length, we can say O(N^2). */
//we can just use char==="a"||"e"...  here
/* function vowels(str) {
  let counts = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      counts++;
    }
  }
  return counts;
} */
