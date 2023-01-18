let nums = [15, 28, 4, 2, 43];

function sumTwoSmallestNumbers(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let sum = arr[0] + arr[1];
  return sum;
}

// https://www.codewars.com/kata/558fc85d8fd1938afb000014/solutions/javascript
