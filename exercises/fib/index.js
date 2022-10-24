// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
//if we use slowFib directly, it will be O(2^n)，it is extremelly slow
//so we should use memoization to cache or reduce the duplicated  calls
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}
function slowfib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
let fib = memoize(slowfib);
module.exports = fib;

/* function fib(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    let a = result[i - 1];
    let b = result[i - 2];
    result.push(a + b);
  }
  return result[n];
} */

/* function fib(n) {
  let lastNumber = 1;
  let prevNumber = 0;

  for (let i = 2; i <= n; i++) {
    lastNumber = lastNumber + prevNumber;
    prevNumber = lastNumber - prevNumber;
  }
  return n === 0 ? 0 : lastNumber;
} */
/* function fib(n) {
  let first = 0;
  let second = 1;
  let val;
  if (n === 1) {
    return 1;
  }
  while (n > 1) {
    val = first + second;
    first = second;
    second = val;
    n--;
  }
  return val;
} */
//O(n)
/* function fib(n, i = 1, current = 1, prev = 0) {
  if (n === i) {
    return current;
  }

  return fib(n, i + 1, current + prev, current);
} */

/* function fib(n, arr = [0, 1]) {
  if (n >= 2) {
    arr[n] = fib(n - 1, arr) + arr[n - 2];
  }

  return arr[n];
} */
/* const fib = (n, ary = [0, 1]) => {
  if (ary.length === n + 1) return ary[ary.length - 1];
  ary.push(ary[ary.length - 1] + ary[ary.length - 2]);
  return fib(n, ary);
}; */
