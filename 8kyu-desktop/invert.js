// function invert(arr) {
//   let invertedArr = [];
//   arr.forEach((num) => {
//     if (num > 0) {
//       invertedArr.push(num - num * 2);
//     } else {
//       invertedArr.push(num + -num * 2);
//     }
//   });
//   return invertedArr;
// }

function invert(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(-array[i]);
  }
  return newArr;
}

console.log(invert([1, 2, 3, -4, -5]));

//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/solutions
