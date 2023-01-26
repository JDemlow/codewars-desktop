function getSum(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(2, 2));

//https://www.codewars.com/kata/55f2b110f61eb01779000053/solutions/javascript
