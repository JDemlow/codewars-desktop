function sumOfCubes(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 3;
  }
  return sum;
}

console.log(sumOfCubes(2));

//https://www.codewars.com/kata/59a8570b570190d313000037/solutions/javascript
