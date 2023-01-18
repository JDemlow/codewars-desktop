// function simpleMultiplication(number) {
//   if (number % 2 === 0) {
//     return number * 8;
//   } else {
//     return number * 9;
//   }
// }

let simpleMultiplication = (number) => (number % 2 ? number * 9 : number * 8);

console.log(simpleMultiplication(9));

//www.codewars.com/kata/583710ccaa6717322c000105/solutions/javascript

let nums = [1, 2, 3, 4, 5, 6, 8, 9, 10];

let onlyEvens = nums.filter((n) => n % 2 === 0);

console.log(onlyEvens);

console.log(nums);
