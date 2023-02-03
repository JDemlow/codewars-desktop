function largest(n, array) {
  return array
    .sort((a, b) => b - a)
    .slice(0, n)
    .sort((a, b) => a - b);
}

//https://www.codewars.com/kata/53d32bea2f2a21f666000256/solutions/javascript
