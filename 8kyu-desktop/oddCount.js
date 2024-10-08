// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

function oddCount(n) {
  let odd = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1 && i < n) {
      odd.push(i);
    }
  }
  return odd.length;
}

console.log(oddCount(7));
