function invert(array) {
  let inverted = [];
  for (i = 0; i < array.length; i++) {
    inverted.push(-array[i]);
  }
  return inverted;
}

console.log(invert([1, -2, 3, -4, 5]));

//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/solutions
