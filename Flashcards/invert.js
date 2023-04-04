function invert(array) {
  let inverted = [];
  array.map((num) => {
    inverted.push(-num);
  });
  return inverted;
}

console.log(invert([1, -2, 3, -4, 5]));

console.log(321);

//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/solutions
