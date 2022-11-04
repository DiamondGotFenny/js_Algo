// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, 's'];
  const counters = [0];
  while (arr.length > 1) {
    let node = arr.shift();
    if (node === 's') {
      counters.push(0);
      arr.push('s');
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}

module.exports = levelWidth;
/* function levelWidth(root) {
  let cache = [root];
  const counters = [];
  while (cache.length) {
    counters.push(cache.length);
    const newCache = [];
    cache.forEach((node) => newCache.push(...node.children));
    cache = newCache;
  }

  return counters;
} */

/* function levelWidth(root) {
  let level = [root];
  const result = [];
  while (level.length > 0) {
    result.push(level.length);
    level = level.reduce((acc, node) => acc.concat(node.children), []);
  }
  return result;
} */
