// function powersOfTwo(num) {
//   let arr = [];
//   for (let i = 0; i <= num; i++) {
//     arr.push(2 ** i);
//   }
//   return arr;
// }

// Refactor

function powersOfTwo(num) {
  let pows = [];
  for (i = 0; i <= num; i++) {
    pows.push(Math.pow(2, i));
  }
  return pows;
}

console.log(powersOfTwo(4));
//https://www.codewars.com/kata/57a083a57cb1f31db7000028/solutions
