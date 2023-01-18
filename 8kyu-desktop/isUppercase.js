let isUpperCase = (str) => {
  return str === str.toUpperCase();
};

console.log(isUpperCase("PIZZA"));

//https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/solutions

//review use of 'this' keyword with syntax found in solution

let nums = [1, 2, 3, 4, 5];

nums.splice(2, 3, 6, 7);

console.log(nums);
