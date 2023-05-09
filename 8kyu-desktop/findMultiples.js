function findMultiples(integer, limit) {
  let multiples = [];
  for (i = 1; i <= limit; i++) {
    if (i % integer === 0) {
      multiples.push(i);
    }
  }
  return multiples;
}

console.log(findMultiples(2, 6));

//https://www.codewars.com/kata/58ca658cc0d6401f2700045f/solutions/javascript
