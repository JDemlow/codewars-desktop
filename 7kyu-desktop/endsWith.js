// function solution(str, ending) {
//   let arr = str.split("");
//   if (arr.includes(ending)) {
//     return true;
//   } else {
//     return false;
//   }
// }

function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution("abc", "bc"));

//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/solutions/javascript
