function squareSum(numbers) {
  let squares = numbers.map((num) => {
    return num ** 2;
  });
  return squares.reduce((acc, val) => acc + val, 0);
}

console.log(squareSum([]));

//https://www.codewars.com/kata/515e271a311df0350d00000f/solutions/javascript
