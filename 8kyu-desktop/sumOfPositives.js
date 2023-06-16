function positiveSum(arr) {
  let sum = [];
  arr.map((el, idx) => {
    if (el > 0) {
      sum.push(el);
    }
  });
  let sums = sum.reduce((acc, val) => {
    return acc + val;
  }, 0);
  return sums;
}

console.log(positiveSum([1, -4, 7, 12]));

//https://www.codewars.com/kata/5715eaedb436cf5606000381/solutions/javascript
